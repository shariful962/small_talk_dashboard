import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { users } from "./data";

const Subscription = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perUsersPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filterUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.plan.toLowerCase().includes(search.toLowerCase()) ||
      user.status.toLowerCase().includes(search.toLowerCase())
  );

  //pagination
  const totalPages = Math.ceil(filterUsers.length / perUsersPage);
  const startIndex = (currentPage - 1) * perUsersPage;
  const endIndex = startIndex + perUsersPage;
  const paginatedUsers = filterUsers.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white shadow-custom rounded-[10px]  mt-5 min-h-[calc(100vh-155px)]">
        {/* header section  */}
        <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h2 className="title text-white">Subscriptions</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-y-2  gap-x-8">
              {/* search button  */}
              <div className="flex items-center w-full md:w-[300px] h-[42px] px-3 py-2 bg-white border border-Primary  rounded-sm">
                <Search className=" w-5 h-5 mr-2 text-Secondary" />
                <input
                  type="text"
                  placeholder="Search User"
                  className="w-full outline-none text-sm text-gray-700"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* manage button  */}
              <div>
                <button className="h-[42px] px-6 w-max py-2 bg-white text-Secondary rounded cursor-pointer font-bold">
                  Manages Fees
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* users section  */}
        <div className="mt-7.5">
          <div className="overflow-x-auto px-4">
            <table className="w-full bg-white text-left">
              <thead className="border-b border-[#154452]">
                <tr>
                  <th className="px-4 py-3">S.lD</th>
                  <th className="px-4 py-3">Full Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="hidden md:table-cell px-4 py-3">Plans</th>
                  <th className="hidden md:table-cell px-4 py-3">
                    Expiration Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#154452]">
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
                      <td
                        className={`px-4 py-3 ${
                          user.status === "Paid"
                            ? "text-[#10B981]"
                            : "text-[#EF4444]"
                        }`}
                      >
                        {user.status}
                      </td>
                      <td className="hidden md:table-cell px-4 py-3">
                        {user.plan}
                      </td>
                      <td className="hidden md:table-cell px-4 py-3">
                        {user.date}
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
        </div>
        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="mt-4 flex items-center justify-between px-4">
            {/* Left: showing X–Y of Z */}
            <div className="text-lg text-Secondary">
              SHOWING {startIndex + 1}–{Math.min(endIndex, filterUsers.length)}{" "}
              OF {filterUsers.length}
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
    </div>
  );
};

export default Subscription;
