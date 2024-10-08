import Postfeed from "@/components/Postfeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Tweet from "@/components/Tweet";
import { db } from "@/firebase";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { doc, getDoc } from "firebase/firestore";
import moment from "moment";
import Link from "next/link";
import { comment } from "postcss";
import { useSelector } from "react-redux";

export async function getServerSideProps(context) {
  const id = context.query.id;
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  const formattedData = {
    username: data.username,
    name: data.name,
    photoUrl: data.photoUrl,
    text: data.tweet,
    comments: data.comments || null,
    //  timestamp: JSON.stringify(data.timestamp.toDate()), <moments > does not work best
    timestamp: moment(data?.timestamp?.toDate()).fromNow(),
    image: data.image || null
  };

  return {
    props: {
      tweetData: formattedData,
    },
  };
}

export default function Commentspage({ tweetData }) {
  const user = useSelector((state) => state.user);
  return (
    <div>
      {" "}
      <div className="bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto flex">
        <Sidebar />

        <div
          className="sm:ml-16 xl:ml-[350px] max-w-2xl flex-grow
        border-gray-700 border-x"
        >
          <div
            className="
              flex space-x-2
               px-3 py-2 text-lg sm:text font-bold
            border-b border-gray-700 sticky top-0 z-50"
          >
            <Link href={"/"}>
              <ArrowLeftIcon className="w-7 cursor-pointer" />
            </Link>

            <h1>Tweet</h1>
          </div>

          <div className="border-b border-gray-700">
            <div className="flex space-x-3 p-3 border-gray-700">
              <img
                className="w-11 h-11 rounded-full object-cover"
                src={tweetData.photoUrl}
              />
              <div>
                <div className="text-gray-500 flex items-center space-x-2 mb-1">
                  <h1 className="text-white font-bold">{tweetData.name}</h1>
                  <span>@{tweetData.username}</span>
                  <div className="w-1 h-1 bg-gray-500 rounded-full "></div>
                  <span> {tweetData.timestamp}</span>
                </div>
                <span className={"text-2xl"}>{tweetData.text}</span>
                {tweetData.image && <img 
        className="object-cover border border-gray-700 rounded-md mt-3 max-h-80"
        src={tweetData.image} />}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center border-b border-gray-700">
            <div className="flex justify-center items-center p-1 space-x-2">
              <img
                className="w-12  h-12 rounded-full object-cover"
                src={user.photoUrl}
              />
              <h1 className="text-21 text-gray-500">Tweet your reply</h1>
            </div>
            <button
              className="bg-[#1d9bf0] rounded-full px-4 py-1.5
          disabled:bg-opacity-50"
              disabled={true}
            >
              Tweet
            </button>
          </div>
          {tweetData.comments?.map((comment) => (
            <div className="flex space-x-3 p-3 border-gray-700">
              <img
                className="w-11 h-11 rounded-full object-cover"
                src={comment.photoUrl}
              />
              <div>
                <div className="text-gray-500 flex items-center space-x-2 mb-1">
                  <h1 className="text-white font-bold">{comment.name}</h1>
                  <span>@{comment.username}</span>
                </div>
                <span>{comment.comment}</span>
              </div>
            </div>
          ))}
        </div>

        <Trending />
      </div>
    </div>
  );
}
