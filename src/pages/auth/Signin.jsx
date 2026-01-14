import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { Icons } from "../../lib/images";


const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  //sign in functionality
  const handleSignin = (e) => {
    e.preventDefault();
    setErrorMsg("");
    if(!email || !password) {
      setErrorMsg("Please enter both email and password");
      return; 
    }
    console.log( email, password )
    setLoading(true);
    setTimeout(()=>{
      toast.success("Sign in Successfull");
      navigate("/dashboard");
      setLoading(false);
    },1000)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#707070] px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg">
        {/* logo section  */}
        <div className="flexCenter my-4">
          <img src={Icons.navLogo} alt="logo"  className='w-22 h-22'/>
        </div>
        {/* titile section  */}
        <h2 className="text-2xl font-medium text-[#1F1D1D] text-center mb-6">
          Sign In
        </h2>
        {/* form section  */}
        <form onSubmit={handleSignin}>
          {/* Email field  */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="xyz@gmail.com"
              className="mb-6 form-control"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
              className="form-control mb-3"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link
              to="/forgotpassword"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="authButton my-6"
            disabled= {loading}
          >
            {loading ? <ClipLoader size={20} color="fff"/>: "Sign In"}
          </button>
          {errorMsg && (
            <p className="text-red-500 text-sm -mt-4">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signin;


