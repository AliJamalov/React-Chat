// Components
import Sidebar from "../Components/Sidebar";
import Contacts from "../Components/Contacts";
import Chats from "../Components/Chats";
// Images
import LogoImage from "../images/Logo.png";

// Icons
import Envelope from "../icons/Envelope";
import Chat from "../icons/ChatIcon";
import Bell from "../icons/Bell";
import Trash from "../icons/Trash";
import ProfileIcon from "../icons/Profile";
import Plus from "../icons/Plus";
import Search from "../icons/Search";
import Dots from "../icons/Dots";
import Clip from "../icons/Clip";
import Smile from "../icons/Smile";
import Mic from "../icons/Mic";
import Send from "../icons/Send";

// Hooks
import { useEffect, useState } from "react";

// Router
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="container rounded-2xl mx-auto mt-20 bg-[#eeeeee]  p-5">
    <div className="h-[600px] w-full flex gap-2">
      <div className="bg-black w-24 h-full rounded-3xl flex flex-col items-center justify-between p-6">
        <div className="h-15 w-15">
          <img src={LogoImage} alt="Logo" className="w-full h-full" />
        </div>
        <ul className="space-y-7">
          <li>
            <Envelope className="h-5 w-5" color="white" />
          </li>
          <li>
            <Chat className="h-5 w-5" color="#FF3406" />
          </li>
          <li>
            <Bell className="h-5 w-5" color="white" />
          </li>
          <li>
            <Trash className="h-5 w-5" color="white" />
          </li>
        </ul>
        <button className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center">
          <ProfileIcon className="h-5 w-5" color="white" />
        </button>
      </div>
      <div className="flex-1 grid grid-cols-12 gap-2">
        <div className="h-full col-span-4 flex flex-col gap-2 overflow-y-hidden">
          <div className="bg-[#F6F6F6] rounded-2xl h-20 flex items-center px-5">
            <h1 className="text-3xl font-bold">Chat</h1>
            <div className="h-12 flex-1 ml-3 mr-2 relative">
              <input
                type="text"
                className=" h-full w-full text-sm rounded-2xl border border-gray-300 p-2 absolute top-0 left-0 placeholder:text-gray-500 text-gray-500 focus:outline-0 focus:border-gray-500"
                placeholder="Search"
              />
              <Search
                className="h-5 w-5 absolute top-1/2 right-[8px] -translate-y-1/2"
                color="rgb(209 213 219)"
              />
            </div>
            <button className="h-12 w-12 rounded-full bg-lightOrange flex items-center justify-center">
              <Plus color="white" className="h-7 w-7" />
            </button>
          </div>
          <div className="bg-[#F6F6F6] py-5 rounded-2xl flex-1 h-full overflow-y-scroll">
            <div className="flex justify-between p-5 border-b bg-gray-200border-gray-300 transition-all duration-200 hover:bg-gray-200 cursor-pointer">
              {/* Left */}
              <div className="flex gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src="https://avatar.iran.liara.run/public/boy"
                    alt="profile"
                    className="h-full w-full"
                  />
                </div>
                <div>
                  <h4 className="text-sm text-black mb-1">Full Name</h4>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-start items-end">
                <p className="text-xs text-gray-400 mb-2">10:27 AM</p>
                <p className="text-right h-4 w-4 text-white bg-green-500 rounded-full text-[9px] flex items-center justify-center"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full col-span-8 flex flex-col gap-2 overflow-y-hidden ">
          <div className="bg-[#F6F6F6] rounded-2xl h-20 flex items-center justify-between px-5">
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  src="https://avatar.iran.liara.run/public/boy"
                  alt="profile"
                  className="h-full w-full"
                />
              </div>

              <div>
                <h4 className="text-sm text-black">Full Name</h4>
                <p className="text-xs text-gray-400">User Name</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex">
              <div className="space-x-1 border-r border-gray-300 pr-5 mr-5">
                <button className="w-20 h-10 rounded-3xl bg-white border text-sm border-gray-300">
                  Profile
                </button>
                <button className="w-20 h-10 rounded-3xl bg-black text-sm text-white">
                  Call
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button>
                  <Search color="black" className="h-5 w-5" />
                </button>
                <button>
                  <Dots color="black" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#f6f6f6] p-5 pb-0 rounded-2xl flex-1 overflow-scroll">
            <div className="text-right mb-3">
              <div className="py-2 px-4 mb-1 text-sm inline-block w-auto max-w-sm rounded-xl bg-gray-300 text-black rounded-br-none">
                Message goes here
              </div>
              <p className="text-[9px] text-gray-500 text-right">Time</p>
            </div>
          </div>
          <div className="h-12 flex gap-2">
            <div className="flex-1 bg-[#f6f6f6] rounded-xl relative overflow-hidden">
              <input
                type="text"
                className="absolute w-full h-full top-0 left-0 pl-12 text-xs focus:outline-none rounded-e-xl"
                placeholder="Write messages..."
              />
              <button className="absolute top-1/2 -translate-y-1/2 left-5">
                <Clip color="black" className="h-4 w-4" />
              </button>
              <button className="absolute top-1/2 -translate-y-1/2 right-5">
                <Smile color="black" className="h-4 w-4" />
              </button>
            </div>
            <button className="bg-[#f6f6f6] h-12 w-12 flex items-center justify-center rounded-xl">
              <Mic className="h-5 w-5" color="black" />
            </button>
            <button className="bg-lightOrange h-12 w-12 flex items-center justify-center rounded-xl">
              <Send className="h-5 w-5" color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
