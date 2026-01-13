import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router";
import { Icons } from "../../lib/images";
import { BsTextCenter, BsTextLeft, BsTextRight } from "react-icons/bs";

const TermsAndCondition = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [privacyText, setPrivacyText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione itaque illo distinctio tempora suscipit quia!"
  );
  const [alignment, setAlignment] = useState("left");
  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [fontSize, setFontSize] = useState(20);

  const handleImage = (e) => {
    const uploadFile = e.target.files?.[0];
    if (uploadFile) setFile(URL.createObjectURL(uploadFile));
  };

  const alignClass =
    alignment === "center"
      ? "text-center"
      : alignment === "right"
      ? "text-right"
      : "text-left";

  const weightClass = isBold ? "font-semibold" : "font-normal";
  const underlineClass = isUnderline ? "underline" : "no-underline";
  const italicClass = isItalic ? "italic" : "no-italic";

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white shadow-custom rounded-[10px]  mt-5 min-h-[calc(100vh-155px)] w-full">
        <div className="w-full h-[80px] text-white bg-Secondary flexBetween  px-4 rounded-tl-[10px] rounded-tr-[10px]">
          <div className="flex items-center gap-x-4">
            <button onClick={() => navigate("/settings")}>
              <GoArrowLeft size={24} />
            </button>
            <h1 className="title text-white">Terms & Conditions</h1>
          </div>
          <button
            onClick={() => navigate("/settings")}
            className="h-[42px] bg-white text-Secondary px-8 border border-white rounded cursor-pointer"
          >
            Save
          </button>
        </div>
        {/* main content  */}
        <div className="p-4">
          <textarea
            value={privacyText}
            onChange={(e) => setPrivacyText(e.target.value)}
            rows={10}
            className={`w-full p-4 border border-gray-300 text-lg text-[#474747] outline-none ${alignClass} ${weightClass} ${underlineClass} ${italicClass}`}
            style={{ fontSize: `${fontSize}px`, lineHeight: "1.6" }}
          />
        </div>
        {/* bottom content  */}
        <div className="flex justify-between flex-col md:flex-row p-4">
          {/* left  */}
          <div className="md:w-1/2">
            <label htmlFor="fileupload">
              <div className="flex items-start gap-x-4">
                <img src={Icons.fileUpload} alt="fileupload" />
                <div>
                  <p className="font-semibold text-[#000000]">
                    Upload your image
                  </p>
                  <p className="text-sm text-[#98A2B3]">max. 5MB </p>
                </div>
              </div>
            </label>
            <input
              type="file"
              accept="image/*"
              id="fileupload"
              onChange={handleImage}
              className="mt-2 block w-full text-sm text-gray-300  p-2 rounded-lg"
            />
            {file && (
              <div className="mt-4">
                <img
                  src={file}
                  alt="Uploaded"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
          {/* Text Tools (Right) */}
          <div className="md:w-1/2">
            <div className="flex flex-wrap items-start justify-end gap-2">
              {/* Alignment group */}
              {/* Font size */}
              <div className="flex items-center   border border-[#DEDEDE] rounded px-2 h-10">
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="bg-transparent text-Secondary text-sm focus:outline-none"
                  title="Font size"
                >
                  {[12, 14, 16, 18, 20, 24, 28, 32].map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              {/* Style group: bold / italic / underline */}
              <div className="flex items-center gap-1 border border-[#DEDEDE] rounded px-2 h-10">
                <button
                  onClick={() => setIsBold((v) => !v)}
                  className={`px-2 py-1 rounded-md text-sm font-semibold ${
                    isBold
                      ? "bg-Secondary text-white"
                      : "hover:bg-gray-100 text-Secondary"
                  }`}
                  title="Bold"
                >
                  B
                </button>
                <button
                  onClick={() => setIsItalic((v) => !v)}
                  className={`px-2 py-1 rounded-md text-sm italic ${
                    isItalic
                      ? "bg-Secondary text-white"
                      : "hover:bg-gray-100 text-Secondary"
                  }`}
                  title="Italic"
                >
                  I
                </button>
                <button
                  onClick={() => setIsUnderline((v) => !v)}
                  className={`px-2 py-1 rounded-md text-sm underline ${
                    isUnderline
                      ? "bg-Secondary text-white underline"
                      : "hover:bg-gray-100 text-Secondary"
                  }`}
                  title="Underline"
                >
                  U
                </button>
              </div>
              {/* text alignment  */}
              <div className="flex items-center gap-1 border border-[#DEDEDE] rounded px-2 h-10">
                {/* Left */}
                <button
                  onClick={() => setAlignment("left")}
                  className={`p-1 rounded-md ${
                    alignment === "left"
                      ? "bg-Secondary text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  title="Align left"
                >
                  {/* icon: align-left */}
                  <BsTextLeft size={18} />
                </button>
                {/* Center */}
                <button
                  onClick={() => setAlignment("center")}
                  className={`p-1 rounded-md ${
                    alignment === "center"
                      ? "bg-Secondary text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  title="Align center"
                >
                  <BsTextCenter size={18} />
                </button>
                {/* Right */}
                <button
                  onClick={() => setAlignment("right")}
                  className={`p-1 rounded-md ${
                    alignment === "right"
                      ? "bg-Secondary text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  title="Align right"
                >
                  <BsTextRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;