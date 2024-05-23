
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { IoFastFood } from "react-icons/io5";
import { IoBedSharp } from "react-icons/io5";
import {
  FaBed,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaViber,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Zap, Cog, CircleCheckBig } from "lucide-react";

function HostelDetails() {
  // Retrieve the id parameter from the URL
  const { id } = useParams();
  console.log(id)
  const [hostelDetails, setHostelDetails] = useState(null);

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/hostels/${id}`);
        const data = await response.json(); // Assuming the response data structure matches what you expect
        setHostelDetails(data);
        console.log(hostelDetails)
      } catch (error) {
        console.error("Error fetching hostel details:", error);
      }
    };

    fetchHostelDetails();
  }, [id]);
  console.log(hostelDetails)

  if (!hostelDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <section className="flex flex-col w-[75%] gap-[1rem] mt-[1rem] px-10">
        <div>
          <span className="flex items-center gap-[10px] px-1 text-xl font-semibold mb-2">
            <Zap className="text-2xl" />
            <h2>{"overview".toUpperCase()}</h2>
          </span>
          <p className="max-w-[850px]">
            If you are a student searching for a Girls Hostel in Dillibazar,
            Kathmandu, look no further! Everest Girl's Hostel Pvt.Ltd is one of
            the best & affortable hostel, strategically located near NAME
            Institute For Medical Education, Gurukul CA, Trinity Int'l College,
            Kathmandu Model College (KMC), National Integrated College,
            Universal College, The Times International College, Sagarmatha
            Multiple College, making it an ideal choice for students studying in
            the area. As a Girls hostel near Kathmandu, we understand the
            importance of accessibility, and that's why we ensure easy access to
            hospitals and transportation facilities. Whether you're an employee
            or a student in Kathmandu, you'll find our accommodation to be
            friendly and familiar, offering a comfortable and convenient stay.
            Embrace the perfect balance of proximity to educational institutions
            and essential amenities by choosing our hostel as your home away
            from home. Experience a hassle-free and enriching stay with us! Our
            hostel is nearby to Putalisadak, Ghattekulo, Maitidevi, Gyaneshwor.
          </p>
        </div>
        <div>
          <span className="flex items-center gap-[10px] px-1 text-xl font-semibold mb-2">
            <Cog className="text-2xl" />
            <h2>{"Facilities".toUpperCase()}</h2>
          </span>
          <div className="flex justify-between w-full px-5 py-8 bg-slate-100 rounded-xl">
            <div className="flex flex-col gap-5 list-none">
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Hot and Cold water
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Locker
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Pure & Safe Drinking water
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Veg Meal
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Non-Veg Meal
                </span>
              </li>
            </div>
            <div className="flex flex-col gap-5 list-none">
              {" "}
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  24 hour Wifi
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Bed Cover
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Hygienic Food
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  No Smoking
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Study Table
                </span>
              </li>
            </div>
            <div className="flex flex-col gap-5 list-none">
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Attached Bathroom
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  CC TV Camera
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Laund
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Pillow
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[15px]">
                  <CircleCheckBig />
                  Gym Train
                </span>
              </li>
            </div>
          </div>
        </div>
        <div>
          <span className="flex items-center gap-[10px] px-1 text-xl font-semibold mb-2">
            <IoFastFood className="text-2xl" />
            <h2>{"meal schedule".toUpperCase()}</h2>
          </span>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Day/Time</TableColumn>
              <TableColumn>Breakfast</TableColumn>
              <TableColumn>Lunch</TableColumn>
              <TableColumn>Snacks</TableColumn>
              <TableColumn>Dinner</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Sunday</TableCell>
                <TableCell>Tea Biscuit</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
                <TableCell>Roti/ Tarkari</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
              </TableRow>
              {/* More rows for meal schedule */}
            </TableBody>
          </Table>
        </div>
        <div className="mb-3">
          <span className="flex items-center gap-[10px] px-1 text-xl font-semibold mb-2">
            <IoBedSharp className="text-2xl" />
            <h2 className="">{"beds available".toUpperCase()}</h2>
          </span>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Room Type</TableColumn>
              <TableColumn>Per Bed Price</TableColumn>
              <TableColumn>Available Beds</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>2 Sharing</TableCell>
                <TableCell>{"npr 11000".toUpperCase()}</TableCell>
                <TableCell>3</TableCell>
              </TableRow>
              {/* More rows for bed availability */}
            </TableBody>
          </Table>
        </div>
        <div className="absolute right-0 top-[20%] w-fit">
          <div className=" bg-white shadow-lg rounded-2xl overflow-hidden min-h-[fit]">
            <div className="px-10 text-xl">
              <h2 className="mb-4 font-bold text-center">{hostelDetails.name}</h2>
              <div className="flex flex-col gap-5 mb-1">
                <p className="flex items-center">
                  <FaPhoneAlt className="mr-2 text-xl" />
                  <span className="text-lg">{hostelDetails.phoneNumber}</span>
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="mr-2 text-xl" />
                  <span className="text-lg">salindagirlshostel@gmail.com</span>
                </p>

                <p className="flex items-center">
                  <FaBed className="mr-2 text-xl" />
                  <span className="text-lg">75 {hostelDetails.location}</span>
                </p>
                <p className="flex items-center ">
                  <FaBed className="mr-2 text-xl" />
                  <span className="text-lg">58 (Available Beds)</span>
                </p>
              </div>
              <div className="flex justify-center">
                <Link to={`/booking/hostel/${id}`}>
                  <button className="px-3 py-3 mt-5 text-sm font-bold text-white bg-purple-500 rounded-full">
                    BOOK NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center px-10 mt-5 mb-3 space-x-6">
              <a href="https://facebook.com" className="text-3xl text-blue-500">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-3xl text-blue-500">
                <FaTwitter />
              </a>
              <a href="https://twitter.com" className="text-3xl text-blue-500">
                <FaWhatsapp />
              </a>
              <a href="https://twitter.com" className="text-3xl text-blue-500">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HostelDetails;
