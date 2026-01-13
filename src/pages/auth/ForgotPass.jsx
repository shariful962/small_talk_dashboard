import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Icons } from "../../lib/images";
import ForgotPassword from "../../components/auth/ForgotPassword";
import UpdatePassword from "../../components/auth/UpdatePassword";
import VerifyCode from "../../components/auth/VerifyCode";

const ForgotPass = ({ initialStep, initialEmail }) => {
  const [step, setStep] = useState(initialStep || "email");
  const [email, setEmail] = useState(initialEmail || "");
  const [otp, setOtp] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  // email function
  const handleEmailSent = () => {
    setStep("verify");
  };

  const handleOtp = () => {
    setStep("reset");
  };

  const handleSetPassword = () => {
    navigate("/signin");
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

        {/* function  */}
        {step === "email" && (
          <ForgotPassword
            email={email}
            setEmail={setEmail}
            onSubmit={handleEmailSent}
          />
        )}

        {step === "verify" && (
          <VerifyCode
            email={email}
            // otp={otp}
            setOtp={setOtp}
            onSubmit={handleOtp}
          />
        )}

        {step === "reset" && (
          <UpdatePassword
            // newPassword={newPassword}
            // setNewPassword={setNewPassword}
            onSubmit={handleSetPassword}
          />
        )}
      </div>
    </div>
  );
};

export default ForgotPass;
