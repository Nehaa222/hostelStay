import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { MdMapsHomeWork } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import DashboardNav from "./DashboardNav";
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

export default function Admin() {
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
                <p className="mt-4 text-6xl font-bold text-center">10</p>
              </div>
            </div>
            <div className="card bg-purple-600 text-white p-3 w-1/4 flex flex-col justify-between rounded-lg shadow-md h-[170px]">
              <div>
                <div className="flex items-center justify-center space-x-2">
                  <FaHome className="w-6 h-6" />
                  <span className="text-2xl font-bold">Total Booking</span>
                </div>
                <p className="mt-4 text-6xl font-bold text-center">122</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto mt-10">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ padding: "16px" }}>Id</TableCell>
                    <TableCell style={{ padding: "16px" }}>
                      Requested by
                    </TableCell>
                    <TableCell style={{ padding: "16px" }}>
                      Hostel Name
                    </TableCell>
                    <TableCell style={{ padding: "16px" }}>
                      Selected Bed
                    </TableCell>
                    <TableCell align="center" style={{ padding: "16px" }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell style={{ padding: "16px" }}>
                        {request.id}
                      </TableCell>
                      <TableCell style={{ padding: "16px" }}>
                        {request.requestedBy}
                      </TableCell>
                      <TableCell style={{ padding: "16px" }}>
                        {request.hostelName}
                      </TableCell>
                      <TableCell style={{ padding: "16px" }}>
                        {request.selectedBed}
                      </TableCell>
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
