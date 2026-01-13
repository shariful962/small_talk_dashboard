import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmNewPassword) {
      setErrorMessage("Passwords do not match!");
      console.log("Passwords do not match"); // Debugging log
      return 
    } else {
      setErrorMessage(""); // clear error
      console.log("Password changed successfully");
      navigate('/settings')
    }
  };

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white shadow-custom rounded-[10px]  mt-5 min-h-[calc(100vh-155px)] w-full">
        <div className="w-full h-[80px] text-white bg-Secondary flex items-center gap-x-4 px-4 rounded-tl-[10px] rounded-tr-[10px]">
          <button onClick={() => navigate("/settings")}>
            <GoArrowLeft size={24} />
          </button>
          <h1 className="title text-white">Change Password</h1>
        </div>

        <div className="max-w-[691px] mx-auto mt-10 px-4">
          <form onSubmit={handleSubmit}>
            {/* current password  */}
            <div className="relative mb-4">
              <label className="label-control">Current Password</label>
              <input
                type={showCurrentPassword ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="form-control"
                placeholder="*******"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-[50px] text-gray-400"
              >
                {showCurrentPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            </div>
            {/* new password  */}
            <div className="relative mb-4">
              <label className="label-control">New Password</label>
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="form-control"
                placeholder="*******"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-[50px] text-gray-400"
              >
                {showNewPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            {/* confirm new password  */}
            <div className="relative">
              <label className="label-control">Confirm New Password</label>
              <input
                type={showConfirmNewPassword ? "text" : "password"}
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                className="form-control"
                placeholder="*******"
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmNewPassword(!showConfirmNewPassword)
                }
                className="absolute right-3 top-[50px] text-gray-400"
              >
                {showConfirmNewPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            </div>
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => navigate("/forgotpass")}
                className="text-sm text-[#14B8A6] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            {/* Submit */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="w-full h-[50px]  bg-Secondary text-white py-2 text-xl font-bold rounded-md hover:bg-[#c45e38] transition cursor-pointer"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
