import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { MdMapsHomeWork } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import DashboardNav from "./DashboardNav";
const bookings = {
  today: [
    {
      id: 1,
      name: "Amrit",
      hostelName: "Sunrise Hostel",
      email: "amrit@example.com",
      selectedBed: "Single",
    },
    {
      id: 2,
      name: "Nina",
      hostelName: "Sunrise Hostel",
      email: "nina@example.com",
      selectedBed: "Double",
    },
    {
      id: 3,
      name: "Nina",
      hostelName: "Sunrise Hostel",
      email: "nina@example.com",
      selectedBed: "Single",
    },
    {
      id: 4,
      name: "Nina",
      hostelName: "Sunrise Hostel",
      email: "nina@example.com",
      selectedBed: "Double",
    },
    {
      id: 5,
      name: "Nina",
      hostelName: "Sunrise Hostel",
      email: "nina@example.com",
      selectedBed: "Single",
    },
  ],
  week: [
    {
      id: 6,
      name: "Raj",
      hostelName: "Moonlight Hostel",
      email: "raj@example.com",
      selectedBed: "Single",
    },
    {
      id: 7,
      name: "Alex",
      hostelName: "Moonlight Hostel",
      email: "alex@example.com",
      selectedBed: "Double",
    },
  ],
  month: [
    {
      id: 8,
      name: "Quyem",
      hostelName: "Starlight Hostel",
      email: "quyem@example.com",
      selectedBed: "Double",
    },
    {
      id: 9,
      name: "John",
      hostelName: "Starlight Hostel",
      email: "john@example.com",
      selectedBed: "Single",
    },
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
      <table className="min-w-full bg-white divide-y divide-gray-200 shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              ID
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Hostel Name
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Selected Beds
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentBookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {booking.id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {booking.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {booking.hostelName}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                {booking.selectedBed}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="flex w-full h-full">
      <DashboardNav />
      <div className="container flex flex-col items-center justify-start w-[80%] pt-6">
        <p className="mb-6 text-3xl font-bold">BOOKING DETAIL</p>
        <div className="mb-6 tabs">
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
        <div className="w-full p-4 overflow-y-auto bg-white shadow-sm content">
          {displayContent()}
        </div>
      </div>
    </div>
  );
}
