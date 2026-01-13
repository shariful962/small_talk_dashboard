

import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const Header = ({ setSidebarOpen }) => {
  return (
    <div className="w-full h-[100px] flex items-center justify-center bg-Primary px-4 ">
      <div className="w-full h-[80px] mt-[2%] mb-[1%] bg-white shadow-custom rounded-[8px] flex items-center justify-between gap-8 px-3">
        {/* left */}
        <div className="flex items-center gap-x-4">
          {/* menu icon */}
          <span
            className="text-2xl lg:hidden cursor-pointer"
            onClick={() => setSidebarOpen(prev => !prev)}
          >
            <IoMdMenu size={28} />
          </span>
          <div>
            <h1 className="text-xl text-textClr font-semibold">Welcome, James</h1>
            <p className="text-textClr">Have a nice day!</p>
          </div>
        </div>
        {/* right */}
        <div className="flex gap-x-4">
          <div className="w-10 h-10 rounded-full border border-Secondary flex items-center justify-center">
            <IoNotificationsOutline size={28} className="text-Secondary" />
          </div>
          <div className="w-10 h-10 rounded-full border border-Secondary flex items-center justify-center">
            <CiUser size={28} className="text-Secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
