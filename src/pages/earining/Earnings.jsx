import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Select, MenuItem } from "@mui/material";
import { users } from "./data";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const yearlyData = {
  2024: [
    { month: "Jan", users: 600 },
    { month: "Feb", users: 500 },
    { month: "Mar", users: 700 },
    { month: "Apr", users: 650 },
    { month: "May", users: 700 },
    { month: "Jun", users: 850 },
    { month: "Jul", users: 600 },
    { month: "Aug", users: 580 },
    { month: "Sep", users: 620 },
    { month: "Oct", users: 680 },
    { month: "Nov", users: 650 },
    { month: "Dec", users: 750 },
  ],
  2025: [
    { month: "Jan", users: 750 },
    { month: "Feb", users: 700 },
    { month: "Mar", users: 820 },
    { month: "Apr", users: 770 },
    { month: "May", users: 880 },
    { month: "Jun", users: 930 },
    { month: "Jul", users: 720 },
    { month: "Aug", users: 690 },
    { month: "Sep", users: 760 },
    { month: "Oct", users: 810 },
    { month: "Nov", users: 770 },
    { month: "Dec", users: 900 },
  ],
};

const Earnings = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [currentPage, setCurrentPage] = useState(1);
  const perUsersPage = 5;

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  //pagination
  const totalPages = Math.ceil(users.length / perUsersPage);
  const startIndex = (currentPage - 1) * perUsersPage;
  const endIndex = startIndex + perUsersPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white shadow-custom rounded-[10px]  mt-5 ">
        <div className="bg-Secondary px-6 py-4 rounded-tl-[10px] rounded-tr-[10px]">
          <h2 className="title text-white">Earnings</h2>
        </div>
        {/* Chart Section */}
        <div className="bg-white rounded-[10px] p-4 mt-6">
          {/* Chart Header with Year Selector */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">User growth</h2>
            <Select
              value={selectedYear}
              onChange={handleYearChange}
              style={{ width: "120px", backgroundColor: "Secondary" }}
            >
              {Object.keys(yearlyData).map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </div>

          {/* Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyData[selectedYear]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#E8632C" barSize={38} />
              <ReferenceLine y={0} stroke="#000" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* users section  */}
        <div className="mt-7.5 px-4 pb-2.5">
          <h1 className="text-xl font-medium text-[#154452] mb-3">
            Last transactions history
          </h1>
          <div className="overflow-x-auto  rounded-lg">
            <table className="w-full bg-white text-left">
              <thead className="bg-Secondary text-white">
                <tr>
                  <th className="px-4 py-3">S.lD</th>
                  <th className="px-4 py-3">Full Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3"> Date</th>
                  <th className="px-4 py-3"> Pay on</th>
                  <th className="px-4 py-3"> TR ID</th>
                  <th className="px-4 py-3">Amount</th>
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
                      <td className="px-4 py-3">{user.date}</td>
                      <td className="px-4 py-3">{user.pay}</td>
                      <td className="px-4 py-3">{user.trId}</td>
                      <td className="px-4 py-3">$ {user.amount}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-4 py-6 text-center text-gray-500 font-medium"
                    >
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
          <div className="mt-4 flex items-center justify-between px-4 pb-4">
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

    </div>
  );
};

export default Earnings;
