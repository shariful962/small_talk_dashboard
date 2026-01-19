import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Privacy = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(`
      <p>At [Your Website Name], we harness the power of AI to create unique, immersive scenarios tailored to your needs. Whether you're a writer, developer, or simply looking for inspiration, our AI-generated content sparks creativity and opens new possibilities. Join us and explore the worlds we can create together.</p>
    `);
  
    const handleEdit = () => setIsEditing(true);
    const handleSave = () => {
      setIsEditing(false);
      console.log("Updated content:", content);
    };
  
    // Minimal toolbar like your screenshot
    const modules = {
      toolbar: [
        [{ size: ["small", false, "large", "huge"] }], // add font sizes
        ["bold", "italic", "underline", "strike"], // text styles
        [{ align: [] }], // alignment
        [{ list: "ordered" }, { list: "bullet" }], // lists
        [{ color: [] }, { background: [] }],
        ["link"], // link
        ["image"],
      ],
    };
  

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white shadow-custom rounded-[10px]  mt-5 min-h-[calc(100vh-155px)] w-full">
        <div className="w-full h-[80px] text-white bg-linear-to-r from-[#00C1C0] to-[#AC3EC1] flexBetween  px-4 rounded-tl-[10px] rounded-tr-[10px]">
          <div className="flex items-center gap-x-4">
            <button onClick={() => navigate("/settings")} className="cursor-pointer">
              <GoArrowLeft size={24} />
            </button>
            <h1 className="title text-white">Privacy Policy</h1>
          </div>
        
        </div>
         <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-custome rounded-lg">
                  {isEditing ? (
                    <div>
                      <ReactQuill
                        value={content}
                        onChange={setContent}
                        modules={modules}
                      />
        
                      <button
                        onClick={handleSave}
                        className="bg-linear-to-r from-[#00C1C0] to-[#AC3EC1] text-white py-2 px-6 rounded-lg  cursor-pointer mt-4"
                      >
                        Update
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div
                        className="text-base text-gray-700 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
        
                      <button
                        onClick={handleEdit}
                        className="bg-linear-to-r from-[#00C1C0] to-[#AC3EC1] text-white py-2 px-6 rounded-lg  cursor-pointer mt-4"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
      
      
      </div>
    </div>
  );
};

export default Privacy;
