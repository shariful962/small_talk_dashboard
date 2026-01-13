import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Icons } from "../../lib/images";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email && !formData.password) {
      setErrorMessage("Both fields are required");
      return;
    } else if (!formData.email) {
      setErrorMessage("Please enter your email");
      return;
    } else if (!formData.password) {
      setErrorMessage("Please enter your password");
      return;
    } else {
      // clear error
      setErrorMessage("");
      navigate("/dashboard");
      console.log("Signed in successfully ");
      console.log("Remember me:", formData.rememberMe);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-[691px] mx-auto px-4">
        <div className="text-center space-y-8 mb-4">
          <img
            src={Icons.SigninLogo}
            alt="sign_in logo"
            className="w-[150px] inline-block"
          />
          <h1 className="text-[32px] md:[48px] lg:[64px] font-EBGaramond font-bold text-textClr tracking-widest">
            Menu Sidekick
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          {/* email  */}
          <div className="mb-6">
            <label className="label-control">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="abc@gmail.com"
            />
          </div>

          {/*  password  */}
          <div className="relative mb-2">
            <label className="label-control">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="*******"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[50px] text-gray-400"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex justify-between items-center mt-2">
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              Remember Me
            </label>

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
              className="w-full h-[50px] bg-Secondary text-white py-2 text-xl font-bold rounded-md hover:bg-[#c45e38] transition cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
