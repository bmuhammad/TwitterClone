import Image from "next/image";
import localFont from "next/font/local";
import Sidebar from "@/components/Sidebar";
import Postfeed from "@/components/Postfeed"
import Trending from "@/components/Trending"
import BottomBanner from "@/components/BottomBanner";
import { useSelector } from "react-redux";
import CommentModal from "@/components/modals/CommentModal";

export default function Home() {

  const username = useSelector(state => state.user.username)
  return (
    <div>
    <div className="bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto flex">
   <Sidebar /> 
    <Postfeed /> 
    <Trending /> 
    </ div>

    <CommentModal />

   {!username && <BottomBanner />}
    </div>
  );
}
