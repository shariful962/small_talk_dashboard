// import React from "react";
// import { Icons } from "../../lib/images";
// import { NavLink, useLocation } from "react-router";
// import { RxCross2 } from "react-icons/rx";


// const Sidebar = ({ isOpen, setIsOpen }) => {
//   const location = useLocation();
//   const links = [
//     { name: "Dashboard", path: "/dashboard", black: Icons.dashDef, white: Icons.dashWhite },
//     { name: "Users Management", path: "/user", black: Icons.userdef, white: Icons.userWhite },
//     { name: "Earnings", path: "/earn", black: Icons.earnDef, white: Icons.earnWhite },
//     { name: "Subscriptions", path: "/subscription", black: Icons.subsDef, white: Icons.subsWhite },
//     { name: "Category", path: "/category", black: Icons.categoryDef, white: Icons.categoryWhite },
//     { name: "Create Admin", path: "/createadmin", black: Icons.createAdminDef, white: Icons.crateAdminWhite },
//     { name: "Feedback", path: "/feedback", black: Icons.feedbackDef, white: Icons.feedbackWhite },
//     { name: "Settings", path: "/settings", black: Icons.settingsDef, white: Icons.settingsWhite },
//   ];

//   return (
//     <div
//       className={`fixed top-0 left-0 h-screen w-[300px] bg-Primary flex items-center justify-center z-50 transform transition-transform duration-300
//         ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
//     >
//       <div className="w-[95%] h-[96%] bg-white shadow-custom rounded-[12px] relative">
//         {/* Close button on mobile */}
//         <button
//           className="lg:hidden absolute top-4 right-4 text-textClr font-bold"
//           onClick={() => setIsOpen(false)}
//         >
//           <RxCross2 size={24}/>
//         </button>

//         <aside>
//           {/* logo section */}
//           <div className="text-center mt-8">
//             <button className="cursor-pointer">
//               <img src={Icons.navLogo} alt="nav-logo" />
//             </button>
//             <h1 className="ml-2 font-EBGaramond text-[28px] md:text-[24px] lg:text-[2rem] mt-2">
//               Menu Sidekick
//             </h1>
//           </div>

//           {/* navigation section */}
//           <nav className="flex flex-col flex-grow space-y-2 p-4">
//             {links.map((link, index) => (
//               <NavLink
//                 key={index}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `px-3 py-2 rounded text-xl ${
//                     location.pathname.startsWith(link.path) ? "bg-Secondary text-white" : "text-textClr"
//                   }`
//                 }
//                 end
//               >
//                 {({ isActive }) => (
//                   <div className="flex items-center space-x-3">
//                     <img
//                       src={location.pathname.startsWith(link.path) ? link.white : link.black}
//                       alt=""
//                       className="h-[30px] w-[30px]"
//                     />
//                     <p>{link.name}</p>
//                   </div>
//                 )}
//               </NavLink>
//             ))}
//           </nav>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { Icons } from "../../lib/images";
import { NavLink, useLocation, useNavigate } from "react-router";
import { RxCross2 } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const links = [
    { name: "Dashboard", path: "/dashboard", black: Icons.dashDef, white: Icons.dashWhite },
    { name: "Users Management", path: "/user", black: Icons.userdef, white: Icons.userWhite },
    { name: "Earnings", path: "/earn", black: Icons.earnDef, white: Icons.earnWhite },
    { name: "Subscriptions", path: "/subscription", black: Icons.subsDef, white: Icons.subsWhite },
    { name: "Category", path: "/category", black: Icons.categoryDef, white: Icons.categoryWhite },
    { name: "Create Admin", path: "/createadmin", black: Icons.createAdminDef, white: Icons.crateAdminWhite },
    { name: "Feedback", path: "/feedback", black: Icons.feedbackDef, white: Icons.feedbackWhite },
    { name: "Settings", path: "/settings", black: Icons.settingsDef, white: Icons.settingsWhite },
  ];

  const handleLogout = () => {
    // Clear user session or token here
    // localStorage.removeItem("token"); // example
    navigate("/signin"); // redirect to login page
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[300px] bg-Primary flex items-center justify-center z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="w-[95%] h-[96%] bg-white shadow-custom rounded-[12px] relative flex flex-col justify-between">
          {/* Close button on mobile */}
          <button
            className="lg:hidden absolute top-4 right-4 text-textClr font-bold"
            onClick={() => setIsOpen(false)}
          >
            <RxCross2 size={24} />
          </button>

          <aside className="flex flex-col h-full justify-between">
            <div>
              {/* logo section */}
              <div className="text-center mt-8">
                <button className="cursor-pointer">
                  <img src={Icons.navLogo} alt="nav-logo" />
                </button>
                <h1 className="ml-2 font-EBGaramond text-[28px] md:text-[24px] lg:text-[2rem] mt-2">
                  Menu Sidekick
                </h1>
              </div>

              {/* navigation section */}
              <nav className="flex flex-col flex-grow space-y-2 p-4">
                {links.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded text-xl ${
                        location.pathname.startsWith(link.path)
                          ? "bg-Secondary text-white"
                          : "text-textClr"
                      }`
                    }
                    end
                  >
                    {({ isActive }) => (
                      <div className="flex items-center space-x-3">
                        <img
                          src={location.pathname.startsWith(link.path) ? link.white : link.black}
                          alt=""
                          className="h-[30px] w-[30px]"
                        />
                        <p>{link.name}</p>
                      </div>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Logout button at bottom */}
            <div className="p-4">
              <button
                onClick={() => setShowLogoutModal(true)}
                className="w-full border border-Secondary hover:bg-Secondary hover:text-white text-Secondary px-3 py-2 rounded text-xl flex items-center justify-center gap-x-2 cursor-pointer duration-300"
              >
                <span><CiLogout/></span>Logout
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-60">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-[350px] shadow-lg text-center">
            
            <p className="mb-6">Confirm logging out!</p>
            <div className="flex justify-center gap-4">
             
              <button
                onClick={() => setShowLogoutModal(false)}
                className="confirmNo"
              >
                Cancel
              </button>
               <button
                onClick={handleLogout}
                className="confirmYes"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
