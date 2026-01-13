
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

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const users = [
    {
      id: "01",
      name: "Robert Fox",
      email: "fox@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=1", // placeholder avatar
    },
    {
      id: "02",
      name: "Robert Fox",
      email: "fox@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: "03",
      name: "Robert Fox",
      email: "fox@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
      {
      id: "04",
      name: "Robert Fox",
      email: "fox@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
      {
      id: "05",
      name: "Robert Fox",
      email: "fox@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
      {
      id: "06",
      name: "Robert Fox",
      email: "fox@email",
      phone: "+123124",
      date: "02-24-2024",
      avatar: "https://i.pravatar.cc/40?img=6",
    },
  ];

  return (
    <div className="p-4 bg-Primary min-h-[calc(100vh-100px)] px-4">
      {/* Label Box */}
      <div className="mt-7.5 bg-white shadow-custom rounded-[10px] flexCenter flex-col lg:flex-row px-4">
        <div className="w-full lg:w-1/2 flexCenter h-[100px] text-center">
          <div>
            <p>1.5k</p>
            <h1>Total distributor</h1>
          </div>
        </div>
        <div className="hidden lg:block h-[70px] w-[1px] bg-Secondary"></div>
        <div className="lg:hidden w-[70px] h-[1px] bg-Secondary"></div>
        <div className="w-full lg:w-1/2 flexCenter h-[100px] text-center">
          <div>
            <p>1.5K</p>
            <h1>Total Earning</h1>
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
            <Bar dataKey="users" fill="#E8632C" barSize={22} />
            <ReferenceLine y={0} stroke="#000" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* users section  */}
      <div className="mt-7.5">
        <h1 className="text-xl font-medium text-[#154452] mb-3">Recent Users</h1>
        <div className="overflow-x-auto shadow rounded-lg">
            <table className="w-full bg-white text-left">
              <thead className="bg-Secondary text-white">
                <tr>
                  <th className="px-4 py-3">S.lD</th>
                  <th className="px-4 py-3">Full Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone No</th>
                  <th className="px-4 py-3">Joined Date</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody  className="bg-white text-[#154452]">
                {users.map(user=>(
                  <tr key={user.id} className="border-b border-[#E8E8F5]">
                    <td className="px-4 py-3">{user.id}</td>
                    <td className="px-4 py-3 flex items-center gap-x-2">
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                    {user.name}
                    </td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.phone}</td>
                    <td className="px-4 py-3">{user.date}</td>
                    <td className="px-4 py-3 flex items-center gap-x-3">
                      <FaBan size={20} className="text-Secondary cursor-pointer" />
                      <LuEye size={20} className="text-[#154452] cursor-pointer"/>
                    </td>
                    

                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
