import React from "react";

const ConfirmDeleteModal = ({ isOpen, onCancel, onConfirm,product  }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[350px] p-6 text-center shadow-lg">
        <h2 className="text-lg font-bold mb-4">
          {product.category === 'avatar'
            ? `Do you want to remove this Avatar?`
            : "Do you want to Remove this Category?"}
        </h2>
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="confirmNo"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="confirmYes"
            onClick={onConfirm}
          >
            Yes, Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
