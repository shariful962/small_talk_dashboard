import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";

const Settings = () => {
  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white shadow-custom rounded-[10px]  mt-5 min-h-[calc(100vh-155px)] w-full">
        <div className="w-full h-[80px] text-white bg-Secondary flex items-center justify-start px-4 rounded-tl-[10px] rounded-tr-[10px]">
          <h1 className="title text-white">Settings</h1>
        </div>
        <div className="px-4 lg:px-8 hover:bg-gray-100 duration-300">
          <Link to={"/settings/changepass"}>
            <div className="settings-menu ">
              <span className="text-lg md:text-xl lg:text-2xl text-[#090B0E]">
                Change Password
              </span>
              <FaChevronRight className="text-[#222222]" />
            </div>
          </Link>
        </div>
        <div className="px-4 lg:px-8 hover:bg-gray-100 duration-300">
          <Link to={"/settings/privacy"}>
            <div className="settings-menu">
              <span className="text-lg md:text-xl lg:text-2xl text-[#090B0E]">
                Privacy Policy
              </span>
              <FaChevronRight className="text-[#222222]" />
            </div>
          </Link>
        </div>
        <div className="px-4 lg:px-8 transition-all hover:bg-gray-100 duration-300">
          <Link to={"/settings/terms"}>
            <div className="settings-menu">
              <span className="text-lg md:text-xl lg:text-2xl text-[#090B0E]">
                Terms & Conditions
              </span>
              <FaChevronRight className="text-[#222222]" />
            </div>
          </Link>
        </div>
        <div className="px-4 lg:px-8 hover:bg-gray-100 duration-300">
          <Link to={"/settings/about"}>
            <div className="settings-menu ">
              <span className="text-lg md:text-xl lg:text-2xl text-[#090B0E]">
                About Us
              </span>
              <FaChevronRight className="text-[#222222]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AudioPlayer = () => {
//   const [audioUrl, setAudioUrl] = useState(null);
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU3OTEwMzM4LCJpYXQiOjE3NTc3OTAzMzgsImp0aSI6Ijg2ZmIyNzRjZGE2ZjQ1NTNiZTAxZDNlYzk5NTkxNTY3IiwidXNlcl9pZCI6IjUifQ.WFZQ5bYnLpBVye5oVLVaz2C7CLTTpawcf1EYhfDIIe4";

//   useEffect(() => {
//     const fetchAudio = async () => {
//       try {
//         const response = await axios.get(
//           "http://10.10.7.24:8000/api/core/audio/preview/83848268-5d10-4644-9a13-7d7567791bfd/?lang=en",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//             responseType: "blob", // important for binary data
//           }
//         );

//         // Convert blob to URL for audio playback
//         const url = URL.createObjectURL(response.data);
//         setAudioUrl(url);
//       } catch (error) {
//         console.error("Error fetching audio:", error);
//       }
//     };

//     fetchAudio();
//   }, []);

//   return (
//     <div>
//       {audioUrl ? (
//         <audio controls src={audioUrl}></audio>
//       ) : (
//         <p>Loading audio...</p>
//       )}
//     </div>
//   );
// };

// export default AudioPlayer;

