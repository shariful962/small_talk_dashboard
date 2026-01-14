import React, { useState } from "react";
import { useNavigate } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Icons } from "../../lib/images";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!password || !confirmPassword) {
      setErrorMsg("Please fill in both fields");
      return;
    }
    if (password.length < 8 || password.length > 10) {
      setErrorMsg("Your password must be 8-10 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Password don't match");
      return;
    }
    console.log("new password", password);
    setLoading(true);
    setTimeout(() => {
      toast.success("Password reset successful!");
      navigate("/");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#707070] px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg">
        {/* logo section  */}
      <div className="flexCenter my-4">
          <img src={Icons.navLogo} alt="logo"  className='w-22 h-22'/>
        </div>

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-x-3">
            <button
              onClick={() => navigate("/otp")}
              className="text-[#1F1D1D] cursor-pointer"
            >
              <IoArrowBack size={22} />
            </button>
            <h2 className="text-2xl font-medium text-[#1F1D1D]">
              Reset Password
            </h2>
          </div>
        </div>

        <p className="text-textClr mb-6 text-center">
          Your password must be 8-10 character long.
        </p>

        <form onSubmit={handleReset}>
          <div className="relative">
            <label className="block text-gray-700 text-sm mb-1">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="form-control mb-6"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm mb-1">
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="form-control"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <button type="submit" className="authButton my-6" disabled={loading}>
            {loading ? <ClipLoader size={20} color="fff" /> : " Reset Password"}
          </button>
          {errorMsg && <p className="text-red-500 text-sm -mt-4">{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
