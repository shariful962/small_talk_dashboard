import React, { useState } from "react";
import { useNavigate } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { Icons } from "../../lib/images";


const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  //send otp functionality
  const handleSendOtp = (e) => {
    e.preventDefault();
    setErrorMsg("");
    
    if(!email){
      setErrorMsg("Email must be required");
      return;
    }
    console.log('email: ' , email);
    setLoading(true);
    setTimeout(()=>{
      toast.success("Otp sent successfully");
      navigate("/otp");
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

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-x-3">
            <button
              onClick={() => navigate(-1)}
              className="text-[#1F1D1D] cursor-pointer"
            >
              <IoArrowBack size={22} />
            </button>
            <h2 className="text-2xl font-medium text-[#1F1D1D]">
              Forgot Password
            </h2>
          </div>
        </div>

        <p className="text-textClr mb-6 text-center">
          Please enter your email address to reset your password.
        </p>

        <form onSubmit={handleSendOtp}>
          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="form-control"
            />
          </div>

          <button type="submit" className="authButton my-6" disabled={loading}>
            {loading ? <ClipLoader size={20} color="fff" /> : 'Send OTP'}
          </button>
          {errorMsg &&(
            <p className="text-red-500 text-sm -mt-4">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

