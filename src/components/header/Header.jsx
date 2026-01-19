import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";



const Header = ({ setSidebarOpen }) => {
  return (
    <div className="w-full h-[100px] flex items-center justify-center bg-Primary px-4 ">
      <div className="w-full h-[80px] mt-[2%] mb-[1%] bg-white shadow-custom rounded-[8px] flex items-center justify-between gap-8 px-3">
        {/* left */}
        <div className="flex items-center gap-x-4">
          {/* menu icon */}
          <span
            className="text-2xl lg:hidden cursor-pointer"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            <IoMdMenu size={28} />
          </span>
          <div>
            <h1 className="text-2xl text-textClr font-semibold">
              Welcome, James
            </h1>
            <p className="text-textClr">Have a nice day!</p>
          </div>
        </div>
        {/* right */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-400">
          <img
            src="https://i.pravatar.cc/300" // replace with user.profile_picture
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
