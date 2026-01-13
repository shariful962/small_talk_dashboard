import React, { useState } from "react";


const FeedbackModal = ({ user, onClose }) => {


  if (!user) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-[500px] p-6 relative">
          <h2 className="title text-center text-textClr mb-3">Feedback Details</h2>
          <div className="flex flex-row items-center gap-3 mb-4 px-7">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-13 h-13 rounded-full"
            />
            <p className="font-medium text-xl md:text-2xl">{user.name}</p>
          </div>
          <div className="space-y-2 px-7">
            <div className="w-full flex items-center">
              <div className="w-[130px] font-bold text-textClr text-lg">
                Name
              </div>
              <div className="flex-1 text-right">{user.name}</div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-[130px] font-bold text-textClr text-lg">
                Email
              </div>
              <div className="flex-1 text-right">{user.email}</div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-[130px] font-bold text-textClr text-lg">
                Phone
              </div>
              <div className="flex-1 text-right">{user.phone}</div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-[130px] font-bold text-textClr text-lg">
                Joining Date
              </div>
              <div className="flex-1 text-right">{user.date}</div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-[130px] font-bold text-textClr text-lg">
                Message details
              </div>
              <div className="flex-1 text-justify">{user.msg}</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 px-7">
            <button
              className="px-4 py-2 border border-Secondary text-Secondary  rounded w-full hover:bg-Secondary hover:text-white cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackModal;
