import React, { useState } from "react";
import { Icons } from "../../lib/images";
import { initalProducts } from "./data";
import CategoryModal from "./CategoryModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const Category = () => {
  const [activeCategory, setActiveCategory] = useState("diet");
  const [products, setProducts] = useState(initalProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const buttonLists = [
    { id: 1, name: "Diet", value: "diet" },
    { id: 2, name: "Allergies", value: "allergies" },
    { id: 3, name: "Medical", value: "medical" },
    { id: 4, name: "Ingredients", value: "ingredients" },
    { id: 5, name: "Avatar", value: "avatar" },
  ];

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  // when delete button clicked
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

 // confirm delete
  const handleConfirmDelete = () => {
    const newProducts = products.filter((p) => p.id !== deleteId);
    setProducts(newProducts);
    setIsDeleteModalOpen(false);
    setDeleteId(null);
  };

  const handleAddCategory = (newCategory) => {
    const newProduct = {
      id: Date.now().toString(),
      name: newCategory.name,
      img: newCategory.image || Icons.defaultIcon,
      category: newCategory.subCategory.toLowerCase(),
    };
    setProducts([newProduct, ...products]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)]">
      {/* Table Section */}
      <div className="bg-white shadow-custom rounded-[10px] mt-5 min-h-[calc(100vh-155px)]">
        {/* Header */}
        <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px] flex flex-col md:flex-row justify-between md:items-center gap-2">
          <h2 className="title text-white">Category List</h2>
          <div className="flex gap-x-4">
            <button
              className="h-[42px] px-6 py-2 bg-white text-Secondary rounded font-bold cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              +Add Categories
            </button>
          </div>
        </div>

        {/* Button Area */}
        <div className="px-6 mt-7.5 flex flex-wrap gap-5">
          {buttonLists.map((btn) => (
            <button
              key={btn.id}
              onClick={() =>
                setActiveCategory(
                  activeCategory === btn.value ? null : btn.value
                )
              }
              className={`px-3 py-2 rounded text-xl w-[130px] cursor-pointer ${
                activeCategory === btn.value
                  ? "bg-Secondary text-white"
                  : "border border-Secondary text-Secondary"
              }`}
            >
              {btn.name}
            </button>
          ))}
        </div>

        {/* Products Table */}
        <div className="mt-7.5 overflow-x-auto px-4">
          <table className="w-full text-left">
            <thead className="border-b border-[#154452]">
              <tr>
                <th className="px-4 py-3">S.ID</th>
                <th className="px-4 py-3">Category Name</th>
                <th className="hidden md:table-cell px-4 py-3">
                  Category Image/Icon
                </th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#154452]">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p, index) => (
                  <tr key={p.id} className="border-b border-[#E8E8F5]">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{p.name}</td>
                    <td className="hidden md:table-cell px-4 py-3 text-center">
                      <img
                        src={p.img}
                        alt=""
                        className={`w-7.5 h-7.5 ${
                          p.category === "avatar" ? "rounded-full" : ""
                        }`}
                      />
                    </td>
                    <td className="px-4 py-3 flex items-center gap-x-2">
                      <button
                        className="cursor-pointer"
                        onClick={() => handleDeleteClick(p.id)}
                      >
                        <img src={Icons.delet} alt="delete icon" />
                      </button>
                      <button className="cursor-pointer">
                        <img src={Icons.edit} alt="edit icon" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No Product found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal */}
      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddCategory}
      />
      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        product={products.find((p) => p.id === deleteId)}
      />
    </div>
  );
};

export default Category;
