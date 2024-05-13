
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { MdMapsHomeWork } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
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
    createRequest(3, "chepang Lama", "Laxmi Hostel", "Single"),
    createRequest(4, "Samir Acharya", "Laxmi Hostel", "Single"),
    createRequest(5, "Ram Limbu", "Laxmi Hostel", "Double"),
    createRequest(6, " Raz Rizal", "Laxmi Hostel", "Single"),
    createRequest(7, "Dinesh Singh", "Laxmi Hostel", "Single"),
    createRequest(8, "Digvijay Rathee", "Laxmi Hostel", "Single"),
    createRequest(9, "Ashish kc", "Laxmi Hostel", "Double"),
    createRequest(10, "Jasmin Lama", "Laxmi Hostel", "Single"),
    // Add more requests as needed
  ]);

  // Handlers to accept or decline the request
  const handleAccept = (id) => {
    console.log("Accepted request with ID:", id);
    // Additional logic to handle accept
  };

  const handleDecline = (id) => {
    console.log("Declined request with ID:", id);
    // Additional logic to handle decline
  };

  return (
    <div className="Container">
      <div class="flex h-full w-full cursor-pointer">
        <div class="sidebar bg-[#D9D9D9] text-black p-5 w-[20%] font-bold text-[20px] flex flex-col items-center h-screen">
          <div class="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <TfiDashboard class="mr-[22px]" />
            <span>Dashboard</span>
          </div>
          <div class="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <FaHome class="mr-[22px]" />
            <span>Booking</span>
          </div>
          <div class="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <MdMapsHomeWork class="mr-[22px]" />
            <span>Hostel List</span>
          </div>
          <div class="menu-item mt-10 mb-4 w-full flex items-center justify-start pl-5">
            <FaRegUserCircle class="mr-[22px]" />
            <span>My Profile</span>
          </div>
          <div class="menu-item mt-10 w-full flex items-center justify-start pl-5">
            <IoLogOut class="mr-[22px]" />
            <span>Logout</span>
          </div>
        </div>

        <div class="main-dashboard p-5 w-full">
          <div className=" mb-10">
            <p className="text-4xl font-semibold">Hello, Admin</p>
          </div>

          <div class="info-cards flex gap-8 mb-5 space-x-4 ">
            <div class="card bg-[#D9D9D9] text-black p-3 w-1/4 h-[170px] flex flex-col justify-between rounded-lg shadow-md">
              <div>
                <div class="flex items-center justify-center space-x-2">
                  <MdMapsHomeWork className="h-6 w-6" />
                  <span class="text-xl font-bold">Total Hostel</span>
                </div>
                <p class="text-center text-4xl font-bold mt-4">10</p>
              </div>
            </div>
            <div class="card bg-[#D9D9D9] text-black p-3 w-1/4 flex flex-col justify-between rounded-lg shadow-md h-[170px]">
              <div>
                <div class="flex items-center justify-center space-x-2">
                  <FaHome className="h-6 w-6" />
                  <span class="text-xl font-bold">Total Booking</span>
                </div>
                <p class="text-center text-4xl font-bold mt-4">122</p>
              </div>
            </div>
          </div>

          <div
            className="container mx-auto mt-10"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Requested by</TableCell>
                    <TableCell>Hostel Name</TableCell>
                    <TableCell>Selected Bed</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell component="th" scope="row">
                        {request.id}
                      </TableCell>
                      <TableCell>{request.requestedBy}</TableCell>
                      <TableCell>{request.hostelName}</TableCell>
                      <TableCell>{request.selectedBed}</TableCell>
                      <TableCell align="right">
                        <Button
                          color="success"
                          onClick={() => handleAccept(request.id)}
                        >
                          Accept
                        </Button>
                        <Button
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