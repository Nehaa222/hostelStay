import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { MdMapsHomeWork } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

const bookings = {
  today: [
    { id: 1, name: "Amrit", hostelName: "Sunrise Hostel", email: "amrit@example.com", selectedBed: "Single" },
    { id: 2, name: "Nina", hostelName: "Sunrise Hostel", email: "nina@example.com", selectedBed: "Double" },
    { id: 3, name: "Nina", hostelName: "Sunrise Hostel", email: "nina@example.com", selectedBed: "Single" },
    { id: 4, name: "Nina", hostelName: "Sunrise Hostel", email: "nina@example.com", selectedBed: "Double" },
    { id: 5, name: "Nina", hostelName: "Sunrise Hostel", email: "nina@example.com", selectedBed: "Single" },
  ],
  week: [
    { id: 6, name: "Raj", hostelName: "Moonlight Hostel", email: "raj@example.com", selectedBed: "Single" },
    { id: 7, name: "Alex", hostelName: "Moonlight Hostel", email: "alex@example.com", selectedBed: "Double" },
  ],
  month: [
    { id: 8, name: "Quyem", hostelName: "Starlight Hostel", email: "quyem@example.com", selectedBed: "Double" },
    { id: 9, name: "John", hostelName: "Starlight Hostel", email: "john@example.com", selectedBed: "Single" },
  ],
};

export default function Booking() {
  const [activeTab, setActiveTab] = useState("today");

  const displayContent = () => {
    const currentBookings = bookings[activeTab] || [];
    if (currentBookings.length === 0) {
      return "No bookings available";
    }

    return (
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hostel Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Selected Beds</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentBookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.hostelName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.selectedBed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="flex h-full w-full">
      <div className="sidebar bg-purple-600 text-white p-5 w-[20%] font-bold text-[20px] flex flex-col items-center h-screen shadow-sm">
        <div className="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
          <Link to="/" className="flex items-center text-white">
            <TfiDashboard className="mr-[22px]" />
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
      <div className="container flex flex-col items-center justify-start w-[80%] pt-6 relative">
        <p className="font-bold text-3xl mb-6">BOOKING DETAIL</p>
        <Link to ="/booknow"><button className="absolute top-6 right-6 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-400">
          Book Now
        </button></Link>
        <div className="tabs mb-6">
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
        <div className="content bg-white p-4 overflow-y-auto w-full shadow-sm">
          {displayContent()}
        </div>
      </div>
    </div>
  );
}
