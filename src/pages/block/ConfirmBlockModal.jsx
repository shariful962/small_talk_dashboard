import React from "react";

const ConfirmBlockModal = ({ open, user, onConfirm, onCancel }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[350px] p-6 text-center">
        <h2 className="text-lg font-bold mb-6">
          Do you want to unblock {user?.name}?
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="confirmNo"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 bg-Secondary text-white font-semibold rounded cursor-pointer"
          >
            Yes, Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBlockModal;

