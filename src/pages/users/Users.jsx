// Users.jsx
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { LuEye } from "react-icons/lu";
import UserModal from "../../common/UserModal";
import { users } from "./data";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Users = () => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perUsersPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filterUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.includes(search.toLowerCase())
  );

  // pagination
  const totalPages = Math.ceil(filterUsers.length / perUsersPage);
  const startIndex = (currentPage - 1) * perUsersPage;
  const endIndex = startIndex + perUsersPage;
  const paginatedUsers = filterUsers.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="p-4 bg-Primary h-[calc(100vh-100px)]">
      {/* Table Section */}
      <div className="bg-white shadow-custom rounded-[10px] mt-5 min-h-[calc(100vh-155px)]">
        <div className="bg-linear-to-r from-[#00C1C0] to-[#AC3EC1] px-6 py-4 rounded-tl-[10px] rounded-tr-[10px]"> 
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h2 className="title text-white">User List</h2>
            <div className="flex flex-col md:flex-row gap-y-2 gap-x-8">
              <div className="flex items-center w-full md:w-[300px] h-[42px] px-3 py-2 bg-white border border-Primary rounded-sm">
                <Search className="w-5 h-5 mr-2 text-Secondary" />
                <input
                  type="text"
                  placeholder="Search User"
                  className="w-full outline-none text-sm text-gray-700"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="mt-7.5 overflow-x-auto px-4">
          <table className="w-full text-left">
            <thead 
            className="border-b border-[#154452]">
              <tr>
                <th className="px-4 py-3 hidden sm:table-cell">S.lD</th>
                <th className="px-4 py-3">Full Name</th>
                <th className="px-4 py-3">Email</th>
                {/* <th className="hidden md:table-cell px-4 py-3">Phone No</th> */}
                <th className="hidden md:table-cell px-4 py-3">Joined Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#154452]">
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user) => (
                  <tr key={user.id} className="border-b border-[#E8E8F5]">
                    <td className="px-4 py-3 hidden sm:table-cell">{user.id}</td>
                    <td className="px-4 py-3 flex items-center gap-x-2">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      {user.name}
                    </td>
                    <td className="px-4 py-3">{user.email}</td>
                    {/* <td className="hidden md:table-cell px-4 py-3">
                      {user.phone}
                    </td> */}
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
            <div className="text-lg text-Secondary hidden md:block">
              SHOWING {startIndex + 1}–{Math.min(endIndex, filterUsers.length)}{" "}
              OF {filterUsers.length}
            </div>
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                shape="rounded"
                siblingCount={0}
                boundaryCount={1}
                sx={{
                  "& .MuiPaginationItem-root": { color: "#727272" },
                  "& .Mui-selected": {
                    // backgroundColor: "#00C1C0 !important",
                    background: "linear-gradient(to right, #00C1C0, #AC3EC1)",
                    color: "white",
                  },
                }}
              />
            </Stack>
          </div>
        )}
      </div>

      {/* View Modal */}
      <UserModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
};

export default Users;

