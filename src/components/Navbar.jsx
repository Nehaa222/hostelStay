import React from "react";
import logo from "../images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import LoginIcon from "@mui/icons-material/Login";
import logo1 from "../images/logo1.png";
export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-10 flex items-center justify-between w-full h-20 bg-[#3975A7]">
        <img src={logo1} alt="" className="w-20 ml-5 " />
        <ul className="mr-8">
          <li className="flex gap-7">
            <a
              href=""
              className="font-semibold links hover:text-[#fff] hover:underline"
            >
              <HomeIcon />
              <h2>Home</h2>
            </a>
            <a
              href=""
              className="font-semibold links hover:text-[#fff] hover:underline"
            >
              <HotelIcon />
              <h2>Hostel</h2>
            </a>
            <a
              href=""
              className="font-semibold links hover:text-[#fff] hover:underline"
            >
              <InfoIcon />
              <h2>About</h2>
            </a>
            <a
              href=""
              className="font-semibold links hover:text-[#fff] hover:underline"
            >
              <ContactsIcon />
              <h2>Contact</h2>
            </a>
            <a
              href=""
              className="font-semibold links hover:text-[#fff] hover:underline"
            >
              <LoginIcon />
              <h2>Login</h2>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
