import React, { useState, useEffect } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DashboardNav from "./DashboardNav";
import { MdMapsHomeWork } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../providers/authProvider";

export default function Admin() {
  const [totalHostels, setTotalHostels] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const [bookings, setBookings] = useState([]);
  const [requests, setRequests] = useState([]);
  const [logged, session] = useAuth();

  useEffect(() => {
    fetchTotalHostels();
    fetchTotalBookings();
    fetchBookings();
  }, [session]); // Trigger fetch calls when session changes

  const fetchTotalHostels = async () => {
    try {
      const response = await fetch("https://hostelstay.onrender.com/admin/totalhostels", {
        method: "GET",
        headers: {
          'accept': 'application/json',
          "Authorization": session ? `Bearer ${session}` : '', // Check if session exists
        }
      });
      if (response.ok) {
        const data = await response.json();
        setTotalHostels(data.totalHostels);
      } else {
        console.error("Failed to fetch total hostels");
      }
    } catch (error) {
      console.error("Error fetching total hostels:", error);
    }
  };

  const fetchTotalBookings = async () => {
    try {
      const response = await fetch(
        "https://hostelstay.onrender.com/admin/totalbookings"
      , {
        method: "GET",
        headers: {
          'accept': 'application/json',
          "Authorization": session ? `Bearer ${session}` : '', // Check if session exists
        }
      });
      if (response.ok) {
        const data = await response.json();
        setTotalBookings(data.totalBookings);
      } else {
        console.error("Failed to fetch total bookings");
      }
    } catch (error) {
      console.error("Error fetching total bookings:", error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch('https://hostelstay.onrender.com/admin/bookings', {
        headers: {
          'accept': 'application/json',
          'Authorization': session ? `Bearer ${session}` : '', // Check if session exists
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleAccept = async (id) => {
    try {
      const response = await fetch(`https://hostelstay.onrender.com/admin/bookings/${id}/accept`, {
        method: "PUT",
        headers: {
          'accept': 'application/json',
          "Authorization": session ? `Bearer ${session}` : '' // Check if session exists
        }
      });
      if (response.ok) {
        fetchAllBookings();
        const data = await response.json(); // Assuming the response contains a JSON message
        alert(`${data.message}`);
      } else {
        console.error("Failed to accept booking");
      }
    } catch (error) {
      console.error("Error accepting booking:", error);
    }
  };

  const handleDecline = async (id) => {
    console.log(session)
    try {
      const response = await fetch(`https://hostelstay.onrender.com/admin/bookings/${id}/decline`, {
        method: "PUT",
        headers: {
          "Authorization": session ? `Bearer ${session}` : '' // Check if session exists
        }
      });
      if (response.ok) {
        fetchAllBookings();
      } else {
        console.error("Failed to decline booking");
      }
    } catch (error) {
      console.error("Error declining booking:", error);
    }
  };
  

  return (
    <div className="Container">
      <div className="flex w-full h-full cursor-pointer">
        <DashboardNav />
        <div className="w-full p-5 main-dashboard">
          <div className="mb-10">
            <p className="text-4xl font-semibold">Hello, Admin</p>
          </div>

          <div className="flex gap-8 mb-5 space-x-4 info-cards">
            <div className="card bg-purple-600 text-white p-3 w-1/4 h-[170px] flex flex-col justify-between rounded-lg shadow-md">
              <div>
                <div className="flex items-center justify-center space-x-2">
                  <MdMapsHomeWork className="w-6 h-6" />
                  <span className="text-2xl font-bold">Total Hostel</span>
                </div>
                <p className="mt-4 text-6xl font-bold text-center">{totalHostels}</p>
              </div>
            </div>
            <div className="card bg-purple-600 text-white p-3 w-1/4 flex flex-col justify-between rounded-lg shadow-md h-[170px]">
              <div>
                <div className="flex items-center justify-center space-x-2">
                  <FaHome className="w-6 h-6" />
                  <span className="text-2xl font-bold">Total Booking</span>
                </div>
                <p className="mt-4 text-6xl font-bold text-center">{totalBookings}</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-10">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ padding: "16px" }}>Requested by</TableCell>
                    <TableCell style={{ padding: "16px" }}>Hostel Name</TableCell>
                    <TableCell style={{ padding: "16px" }}>Selected Bed</TableCell>
                    <TableCell align="center" style={{ padding: "16px" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookings.map((booking) => ( // Changed 'requests' to 'bookings' in map function
                    <TableRow key={booking.id}>
                      <TableCell style={{ padding: "16px" }}>{booking.name}</TableCell>
                      <TableCell style={{ padding: "16px" }}>{booking.hostelName}</TableCell>
                      <TableCell style={{ padding: "16px" }}>{booking.selectedBed}</TableCell>
                      <TableCell align="center" style={{ padding: "16px" }}>
                        <Button variant="contained" color="success" onClick={() => handleAccept(booking._id.$oid)} style={{ marginRight: "8px" } }>Accept</Button>
                        <Button variant="contained" color="error" onClick={() => handleDecline(booking._id.$oid)}>Decline</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <script>
          </script>

        </div>
      </div>
    </div>
  );
}
