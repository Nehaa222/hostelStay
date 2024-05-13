import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { SiHiltonhotelsandresorts } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";
function DashboardNav() {
  return (
    <>
      <nav className="flex flex-col w-[14rem] h-screen justify-evenly items-center sticky top-0 bottom-0 shadow-2xl bg-[#6722b5] text-seto rounded-r-xl drop-shadow-xl">
        <div className="flex items-center justify-center w-full gap-2 text-xl font-thin">
          <span>
            <MdSpaceDashboard className="text-5xl" />
          </span>
          <Link to="/admin">
            <h2>Dashboard</h2>
          </Link>
        </div>
        <div className="relative flex items-center justify-center w-full gap-3 text-xl font-thin right-3">
          <span>
            <TbBrandBooking className="text-5xl" />
          </span>
          <Link to="/booking">
            <h2>Booking</h2>
          </Link>
        </div>
        <div className="relative flex items-center justify-center w-full gap-3 text-xl font-thin left-1">
          <span>
            <SiHiltonhotelsandresorts className="text-5xl" />
          </span>
          <Link to="/hostel-list">
            <h2>Hostel List</h2>
          </Link>
        </div>
        <div className="flex items-center justify-center w-full gap-3 text-xl font-thin">
          <span>
            <CgProfile className="text-5xl" />
          </span>
          <Link to="/my-profile">
            <h2>My profile</h2>
          </Link>
        </div>
        <div className="relative flex items-center justify-center w-full gap-3 text-xl right-[15px] font-thin">
          <span>
            <RiLogoutBoxRLine className="text-5xl" />
          </span>
          <Link to="/">
            <h2>Logout</h2>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default DashboardNav;
