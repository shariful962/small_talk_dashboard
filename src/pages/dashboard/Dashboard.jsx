
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
import { FaBan, FaEye } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { users } from "../users/data";
import UserModal from "../../common/UserModal";



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

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

 

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      {/* Label Box */}
      <div className="mt-7.5 bg-white shadow-custom rounded-[10px] flexCenter flex-col lg:flex-row px-4">
        <div className="w-full lg:w-1/2 flexCenter h-[150px] text-center">
          <div>
            <p className="text-4xl">1.5k</p>
            <h1 className="mt-1 text-2xl text-textClr">Total distributor</h1>
          </div>
        </div>
        <div className="hidden lg:block h-[70px] w-[1px] bg-Secondary"></div>
        <div className="lg:hidden w-[70px] h-[1px] bg-Secondary"></div>
        <div className="w-full lg:w-1/2 flexCenter h-[100px] text-center">
          <div>
            <p className="text-4xl">1.5K</p>
            <h1 className="mt-1 text-2xl text-textClr">Total Earning</h1>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white shadow-custom rounded-[10px] p-4 mt-6">
        {/* Chart Header with Year Selector */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">User Ratio</h2>
          <Select
            value={selectedYear}
            onChange={handleYearChange}
            style={{ width: "120px" }}
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
            <Bar dataKey="users" fill="#00C1C0" barSize={22} />
            <ReferenceLine y={0} stroke="#000" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* users section  */}
      <div className="mt-7.5">
        <h1 className="text-xl font-medium text-[#154452] mb-3">Recent Users</h1>
        <div className="overflow-x-auto shadow rounded-lg">
            <table className="w-full bg-white text-left">
              <thead 
              // className="bg-Secondary text-white"
              className="bg-linear-to-r from-[#00C1C0] to-[#AC3EC1] text-white">
                <tr>
                  <th className="hidden sm:table-cell px-4 py-3">S.lD</th>
                  <th className="px-4 py-3">Full Name</th>
                  <th className="px-4 py-3">Email</th>
                  {/* <th className="px-4 py-3">Phone No</th> */}
                  <th className="px-4 py-3 hidden sm:table-cell">Joined Date</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody  className="bg-white text-[#154452]">
                {users.slice(0,5).map(user=>(
                  <tr key={user.id} className="border-b border-[#E8E8F5]">
                    <td className=" hidden sm:table-cell px-4 py-3">{user.id}</td>
                    <td className="px-4 py-3 flex items-center gap-x-2">
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                    {user.name}
                    </td>
                    <td className="px-4 py-3">{user.email}</td>
                    {/* <td className="px-4 py-3">{user.phone}</td> */}
                    <td className="px-4 py-3 hidden sm:table-cell">{user.date}</td>
                    <td className="px-4 py-3 flex items-center gap-x-3">
                      
                      <LuEye size={20} onClick={() => setSelectedUser(user)} className="text-[#154452] cursor-pointer"/>
                    </td>
                    

                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
       {/* View Modal */}
      <UserModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
};

export default Dashboard;
