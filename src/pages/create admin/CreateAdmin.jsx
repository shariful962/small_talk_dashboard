import React, { useState } from "react";
import { FiEye, FiEyeOff, FiUpload } from "react-icons/fi";

const CreateAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // here you can send formData to backend (API)
  };

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white shadow-custom rounded-[10px]  mt-5 min-h-[calc(100vh-155px)]">
        <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px]">
          <h2 className="title text-white">Create Admin</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name */}
          <div>
            <label className="label-control">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="form-control"
            />
          </div>

          {/* Email */}
          <div>
            <label className="label-control">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
              className="form-control"
            />
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="label-control">New Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
              <button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 top-[50px] text-gray-400">
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            <div className="relative">
              <label className="label-control">
                Confirm New Password
              </label>
              <input
                type={showConfirmPassword ? 'text' : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control"
              />
              <button type="button" onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-[50px] text-gray-400">
                {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div>
            <label className="label-control">Profile Image</label>
            <div className="w-full h-[113px] border border-[#EAECEE] rounded-md p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer bg-[#F7F8F8]">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="flex flex-col items-center cursor-pointer"
              >
                <FiUpload size={24} />
                <span>Upload Image</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center mt-8">
            <button
            type="submit"
            className="w-full h-[50px] md:w-[592px] bg-Secondary text-white py-2 text-xl font-bold rounded-md hover:bg-[#c45e38] transition cursor-pointer"
          >
            Create Admin
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAdmin;
