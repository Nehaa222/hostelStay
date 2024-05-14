import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { MdMapsHomeWork } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function createRequest(id, requestedBy, hostelName, selectedBed) {
  return { id, requestedBy, hostelName, selectedBed };
}

export default function AdminDashboard() {
  const [requests, setRequests] = useState([
    createRequest(1, "Uttam Magar", "Laxmi Hostel", "Single"),
    createRequest(2, "Prashant Kc ", "Laxmi Hostel", "Double"),
    createRequest(3, "Chepang Lama", "Laxmi Hostel", "Single"),
    createRequest(4, "Samir Acharya", "Laxmi Hostel", "Single"),
    createRequest(5, "Ram Limbu", "Laxmi Hostel", "Double"),
    createRequest(6, "Raz Rizal", "Laxmi Hostel", "Single"),
    createRequest(7, "Dinesh Singh", "Laxmi Hostel", "Single"),
    createRequest(8, "Digvijay Rathee", "Laxmi Hostel", "Single"),
    createRequest(9, "Ashish Kc", "Laxmi Hostel", "Double"),
    createRequest(10, "Jasmin Lama", "Laxmi Hostel", "Single"),
  ]);


  const handleAccept = (id) => {
    console.log("Accepted request with ID:", id);
    
  };

  const handleDecline = (id) => {
    console.log("Declined request with ID:", id);
    
  };

  return (
    <div className="Container">
      <div className="flex h-full w-full cursor-pointer">
        <div className="sidebar bg-purple-600 text-white p-5 w-[20%] font-bold text-[20px] flex flex-col items-center h-screen shadow-sm fixed top-0 left-0 overflow-y-auto">
          <div className="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <TfiDashboard className="mr-[22px]" />
            <span>Dashboard</span>
          </div>

          <div className="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <Link to="/Booking" className="flex items-center text-white">
              <FaHome className="mr-[22px]" />
              <span>Booking</span>
            </Link>
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

        <div className="main-dashboard p-5 w-full ml-[20%]">
          <div className="mb-10">
            <p className="text-4xl font-semibold">Hello, Admin</p>
          </div>

          <div className="info-cards flex gap-8 mb-5 space-x-4">
            <div className="card bg-purple-600 text-white p-3 w-1/4 h-[170px] flex flex-col justify-between rounded-lg shadow-md">
              <div>
                <div className="flex items-center justify-center space-x-2">
                  <MdMapsHomeWork className="h-6 w-6" />
                  <span className="text-2xl font-bold">Total Hostel</span>
                </div>
                <p className="text-center text-6xl font-bold mt-4">10</p>
              </div>
            </div>
            <div className="card bg-purple-600 text-white p-3 w-1/4 flex flex-col justify-between rounded-lg shadow-md h-[170px]">
              <div>
                <div className="flex items-center justify-center space-x-2">
                  <FaHome className="h-6 w-6" />
                  <span className="text-2xl font-bold">Total Booking</span>
                </div>
                <p className="text-center text-6xl font-bold mt-4">122</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-10">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ padding: "16px" }}>Id</TableCell>
                    <TableCell style={{ padding: "16px" }}>Requested by</TableCell>
                    <TableCell style={{ padding: "16px" }}>Hostel Name</TableCell>
                    <TableCell style={{ padding: "16px" }}>Selected Bed</TableCell>
                    <TableCell align="center" style={{ padding: "16px" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell style={{ padding: "16px" }}>{request.id}</TableCell>
                      <TableCell style={{ padding: "16px" }}>{request.requestedBy}</TableCell>
                      <TableCell style={{ padding: "16px" }}>{request.hostelName}</TableCell>
                      <TableCell style={{ padding: "16px" }}>{request.selectedBed}</TableCell>
                      <TableCell align="center" style={{ padding: "16px" }}>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => handleAccept(request.id)}
                          style={{ marginRight: "8px" }}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleDecline(request.id)}
                        >
                          Decline
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
