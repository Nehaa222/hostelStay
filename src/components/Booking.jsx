import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { MdMapsHomeWork } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Booking() {
  const [activeTab, setActiveTab] = useState("today");

  const displayContent = () => {
    switch (activeTab) {
      case "today":
        return "Booked for Amrit";
      case "week":
        return "Booked by Raj";
      case "month":
        return "Booked by Quyem";
      default:
        return "Select a tab to display bookings";
    }
  };

  return (
    <div className="Container ">
      <div className="flex h-full w-full cursor-pointer">
        <div className="sidebar bg-[#D9D9D9] text-black p-5 w-[40%] font-bold text-[20px] flex flex-col items-center h-screen">
          
          <div class="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <Link to="/" className="flex items-center">
              <TfiDashboard class="mr-[22px]" />
              <span>Dashboard</span>
            </Link>
          </div>


          <div className="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <FaHome className="mr-[22px]" />
            <span>Booking</span>
          </div>
          <div className="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <MdMapsHomeWork className="mr-[22px]" />
            <span>Hostel List</span>
          </div>
          <div className="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <FaRegUserCircle className="mr-[22px]" />
            <span>My Profile</span>
          </div>
          <div className="menu-item mt-10 w-full flex items-center justify-start pl-5">
            <IoLogOut className="mr-[22px]" />
            <span>Logout</span>
          </div>
        </div>
        <div className="container flex flex-col ml-[28%] Shadow-md ">
          <p className="font-bold text-3xl ml-[100px]">BOOKING DETAIL</p>
          <div className="tabs mt-[30px]">
            <button
              className={`tab ${
                activeTab === "today"
                  ? "active bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              } hover:bg-blue-300 px-4 py-2 rounded shadow mr-2`}
              onClick={() => setActiveTab("today")}
            >
              Today's booking
            </button>
            <button
              className={`tab ${
                activeTab === "week"
                  ? "active bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              } hover:bg-blue-300 px-4 py-2 rounded shadow mr-2`}
              onClick={() => setActiveTab("week")}
            >
              This week's booking
            </button>
            <button
              className={`tab ${
                activeTab === "month"
                  ? "active bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              } hover:bg-blue-300 px-4 py-2 rounded shadow mr-2`}
              onClick={() => setActiveTab("month")}
            >
              This month's booking
            </button>
          </div>

          <div className="content mt-[50px] h-[350px] w-[70%] bg-green-400">
            {displayContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
