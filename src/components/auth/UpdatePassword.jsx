
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";

const UpdatePassword = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.newPassword || !formData.confirmNewPassword) {
      setErrorMessage("Fill the password field");
      return;
    }
    if (formData.newPassword !== formData.confirmNewPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    onSubmit(formData.newPassword); // 🔥 move to SignIn
    navigate("/signin");
  };

  return (
    <div>
      <div className="max-w-[691px] mx-auto mt-10 px-4">
        <h1 className="font-bold font-EBGaramond text-textClr text-2xl md:text-[28px] lg:text-[2rem] mb-8">
          Set new password
        </h1>
        <form onSubmit={handleSubmit}>
          {/* new password */}
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

          {/* confirm new password */}
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
              {showConfirmNewPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

          {/* Submit */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-full h-[50px] bg-Secondary text-white py-2 text-xl font-bold rounded-md hover:bg-[#c45e38] transition cursor-pointer"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;


