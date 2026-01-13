import React, { useRef, useState } from "react";

const VerifyCode = ({ setOtp, email, onSubmit }) => {
  const inputs = useRef([]);
  const [values, setValues] = useState(["", "", "", ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const joinOtp = values.join("");
    console.log("Entered OTP:", joinOtp); 
    setOtp(joinOtp);
    onSubmit(joinOtp); //  move to Reset step
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      if (index < 3) inputs.current[index + 1]?.focus();
    } else {
      const newValues = [...values];
      newValues[index] = "";
      setValues(newValues);
    }
  };

  const handleKey = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newValues = [...values];

      if (values[index]) {
        newValues[index] = "";
        setValues(newValues);
      } else if (index > 0) {
        newValues[index - 1] = "";
        setValues(newValues);
        inputs.current[index - 1]?.focus();
      }
    }

    if (e.key === "ArrowLeft" && index > 0) inputs.current[index - 1]?.focus();
    if (e.key === "ArrowRight" && index < inputs.current.length - 1)
      inputs.current[index + 1]?.focus();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").trim();
    const digits = paste.replace(/\D/g, "").slice(0, 4).split("");

    if (digits.length === 0) return;

    const newValues = [...values];
    for (let i = 0; i < digits.length; i++) {
      newValues[i] = digits[i];
    }
    setValues(newValues);

    inputs.current[digits.length - 1]?.focus();
  };

  return (
    <div className="w-full md:max-w-[691px] mx-auto px-4 flex flex-col">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold font-EBGaramond text-textClr text-2xl md:text-[28px] lg:text-[2rem] mb-4">
          Verify OTP
        </h1>
        <p className="text-lg text-textClr mb-2">
          Please check your email. We have sent a code to{" "}
          <strong>{email}</strong>
        </p>

        <div className="flex flex-wrap justify-evenly items-center gap-1 mt-4">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              maxLength={1}
              type="tel"
              inputMode="numeric"
              value={values[index]}
              className={`p-2 rounded-xl border-1 text-center outline-none md:text-xl w-[50px] md:w-[3.375rem] h-[55px] md:h-[3.75rem] transition-colors duration-150 ${
                values[index] ? "border border-Secondary" : "border-gray-400"
              }`}
              placeholder="-"
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKey(e, index)}
              onPaste={handlePaste}
            />
          ))}
        </div>

        <div className="mt-3 flexBetween">
          <h1 className="text-textClr">Didn’t receive code?</h1>
          <button type="button" className="text-[#6DAEDB] cursor-pointer">
            Resend
          </button>
        </div>

        <button
          className={`mt-8 w-full h-[50px] py-2 text-xl font-bold rounded-md transition-colors duration-150 ${
            values.every((e) => e.trim() !== "")
              ? "bg-Secondary text-white cursor-pointer"
              : "bg-Secondary/50 text-white cursor-not-allowed"
          }`}
          disabled={!values.every((e) => e.trim() !== "")}
          type="submit"
        >
          Verify Code
        </button>
      </form>
    </div>
  );
};

export default VerifyCode;
