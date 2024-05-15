import React, { useState, useEffect } from "react";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import DashboardNav from "./DashboardNav";

export default function Booking() {
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("today");

  useEffect(() => {
    fetchBookings(activeTab);
  }, [activeTab]);

  const fetchBookings = async (tab) => {
    try {
      const response = await fetch(`https://hostelstay.onrender.com/bookings/${tab}`);
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const displayContent = () => {
    if (bookings.length === 0) {
      return "No bookings available";
    }

    return (
      <table className="min-w-full bg-white divide-y divide-gray-200 shadow-sm">
        {/* Table header */}
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
        {/* Table body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking) => (
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
        {/* Tab buttons */}
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
        {/* Display content */}
        <div className="w-full p-4 overflow-y-auto bg-white shadow-sm content">
          {displayContent()}
        </div>
      </div>
    </div>
  );
}
