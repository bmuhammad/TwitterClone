import { HomeIcon,
    HashtagIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    BellIcon,
    UserIcon,
    DotsCircleHorizontalIcon
 } from "@heroicons/react/outline";
import Image from "next/image"

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col fixed">
      <div className="py-3">
        <Image src={"/assets/twitter-logo.png"} width={34} height={34}/>

      </div>
      <nav>
        <SidebarLink Icon={HomeIcon} text={"Home"} />
        <SidebarLink Icon={HashtagIcon} text={"Explore"} />
        <SidebarLink Icon={BellIcon} text={"Notifications"} />
        <SidebarLink Icon={InboxIcon} text={"Messages"} />
        <SidebarLink Icon={BookmarkIcon} text={"Home"} />
        <SidebarLink Icon={UserIcon} text={"Profile"} />
        <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
 
      </nav>
      <div>User</div>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="flex mb-6 items-center text-xl space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline" >
      {text}
      </span>
    </li>
  );
}
