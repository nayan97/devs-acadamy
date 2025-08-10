import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaTasks, FaChartLine, FaPlus } from "react-icons/fa";

const Body = () => {
  return (
    <motion.div
      className="p-6 bg-gray-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dashboard Title */}
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          className="bg-white shadow rounded-lg p-6 flex items-center gap-4"
          whileHover={{ scale: 1.03 }}
        >
          <FaUsers className="text-green-600 text-3xl" />
          <div>
            <p className="text-gray-500">Total Users</p>
            <h2 className="text-xl font-bold">1,245</h2>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow rounded-lg p-6 flex items-center gap-4"
          whileHover={{ scale: 1.03 }}
        >
          <FaTasks className="text-blue-600 text-3xl" />
          <div>
            <p className="text-gray-500">Active Batch</p>
            <h2 className="text-xl font-bold">37</h2>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow rounded-lg p-6 flex items-center gap-4"
          whileHover={{ scale: 1.03 }}
        >
          <FaChartLine className="text-purple-600 text-3xl" />
          <div>
            <p className="text-gray-500">Growth</p>
            <h2 className="text-xl font-bold">+18%</h2>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
          <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              <p className="font-medium">New user registered</p>
              <p className="text-sm text-gray-500">2 minutes ago</p>
            </li>
            <li className="border-b pb-2">
              <p className="font-medium">Project “Alpha” updated</p>
              <p className="text-sm text-gray-500">10 minutes ago</p>
            </li>
            <li>
              <p className="font-medium">Server maintenance scheduled</p>
              <p className="text-sm text-gray-500">1 hour ago</p>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
          <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            <FaPlus /> Add New Project
          </button>
          <button className="w-full mt-3 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            <FaPlus /> Invite User
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Body;
