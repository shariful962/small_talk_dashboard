import { Search } from "lucide-react";
import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import FeedbackModal from "./FeedbackModal";
import { users } from "./data";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Feedback = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perUsersPage = 5;


  //pagination 
  const totalPages = Math.ceil(users.length / perUsersPage);
  const startIndex = (currentPage - 1) * perUsersPage;
  const endIndex = startIndex + perUsersPage;
  const paginatedUsers = users.slice (startIndex, endIndex);


  const handlePageChange = (event, value) =>{
    setCurrentPage(value)
  }

  



  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)]">
      {/* Table Section */}
      <div className="bg-white shadow-custom rounded-[10px] mt-5 min-h-[calc(100vh-155px)]">
        {/* Header */}
        <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px] flex flex-col md:flex-row justify-between items-center gap-2">
          <h2 className="title text-white">Report Management</h2>
        </div>

        {/* Users Table */}
        <div className="mt-7.5 overflow-x-auto px-4">
          <table className="w-full text-left">
            <thead className="border-b border-[#154452]">
              <tr>
                <th className="px-4 py-3">S.lD</th>
                <th className="px-4 py-3">Full Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="hidden md:table-cell px-4 py-3">Phone No</th>
                <th className="hidden md:table-cell px-4 py-3">Joined Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#154452]">
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user) => (
                  <tr key={user.id} className="border-b border-[#E8E8F5]">
                    <td className="px-4 py-3">{user.id}</td>
                    <td className="px-4 py-3 flex items-center gap-x-2">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      {user.name}
                    </td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="hidden md:table-cell px-4 py-3">
                      {user.phone}
                    </td>
                    <td className="hidden md:table-cell px-4 py-3">
                      {user.date}
                    </td>
                    <td className="px-4 py-3 flex items-center gap-x-3">
                     
                      <LuEye
                        size={20}
                        className="text-[#154452] cursor-pointer"
                        onClick={() => setSelectedUser(user)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="mt-4 flex items-center justify-between px-4">
            {/* Left: showing X–Y of Z */}
            <div className="text-lg text-Secondary">
              SHOWING {startIndex + 1}–{Math.min(endIndex, users.length)}{" "}
              OF {users.length}
            </div>

            {/* Right: MUI Pagination */}
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                shape="rounded"
                siblingCount={0}
                boundaryCount={1}
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#727272", // text color
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#E27B4F !important", // active page bg
                    color: "white", // active page text
                  },
                }}
              />
            </Stack>
          </div>
        )}
      </div>

      {/* Modal Component */}
      <FeedbackModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
        
      />
    </div>
  );
};

export default Feedback;



