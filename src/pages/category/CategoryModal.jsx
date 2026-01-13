import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const CategoryModal = ({ isOpen, onClose, onSave }) => {
  const [categoryName, setCategoryName] = useState("");
  const [subCategory, setSubCategory] = useState("Diet");
  const [image, setImage] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name: categoryName, subCategory, image });
    setCategoryName("");
    setSubCategory("Diet");
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-lg w-[450px] p-6 relative">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Category Type */}
          <div className="mb-4">
            <label className="mb-2 block text-lg md:text-xl lg:text-2xl font-medium text-[#1F2937]">
              Category Type
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="category name"
              className="w-full bg-[#F7F8F8] border border-[#DEE9FB] h-[50px] px-3 py-2 rounded outline-none"
              required
            />
          </div>

          {/* Sub Category */}
          <div className="flex items-start justify-between mb-4">
            <label className="block text-lg md:text-xl lg:text-2xl font-medium text-[#1F2937]">
              Sub Category
            </label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-1/2 border px-3 py-2 rounded"
            >
              <option>Diet</option>
              <option>Allergies</option>
              <option>Medical</option>
              <option>Ingredients</option>
              <option>Avatar</option>
            </select>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-lg md:text-xl lg:text-2xl font-medium text-[#1F2937] mb-2">
              Category Image/Icon
            </label>
            <label
              htmlFor="fileUpload"
              className="bg-[#F7F8F8] border border-[#DEE9FB] rounded-md h-[100px] md:h-[133px] p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
            >
              {image ? (
                <img src={image} alt="preview" className="w-16 h-16 mx-auto" />
              ) : (
                <>
                  <FiUpload size={24}  className="text-[#979797]"/>
                  <span className="text-gray-500">Upload Image</span>
                </>
              )}
              <input
                id="fileUpload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 px-6 py-2 border border-Secondary text-Secondary transition-all rounded-md hover:bg-Secondary duration-300 hover:text-white cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 px-6 py-2 bg-Secondary text-white rounded-md transition-all cursor-pointer hover:bg-Secondary/80 duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;
