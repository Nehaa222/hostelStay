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
function HostelDetails() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col w-[75%] gap-[1rem] mt-[1rem] px-10">
        <div>
          <span className="flex items-center gap-[10px] px-1 text-xl font-semibold mb-2">
            <IoFastFood className="text-2xl" />
            <h2 className="">{"meal schedule".toUpperCase()}</h2>
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
              <TableRow key="2">
                <TableCell>Monday</TableCell>
                <TableCell>Tea Biscuit</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
                <TableCell>Roti/ Tarkari</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Tuesday</TableCell>
                <TableCell>Tea Biscuit</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
                <TableCell>Roti/ Tarkari</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Wednesday</TableCell>
                <TableCell>Tea Biscuit</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
                <TableCell>Roti/ Tarkari</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>Thursday</TableCell>
                <TableCell>Tea Biscuit</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
                <TableCell>Roti/ Tarkari</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell>Friday</TableCell>
                <TableCell>Tea Biscuit</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
                <TableCell>Roti/ Tarkari</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
              </TableRow>
              <TableRow key="7">
                <TableCell>Saturday</TableCell>
                <TableCell>Tea Biscuit</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
                <TableCell>Roti/ Tarkari</TableCell>
                <TableCell>Dal/ Rice/ Vegetables/Achar</TableCell>
              </TableRow>
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
            </TableBody>
          </Table>
        </div>
        <div className="absolute right-0 top-[20%] w-fit">
          <div className=" bg-white shadow-lg rounded-2xl overflow-hidden min-h-[fit]">
            <div className="px-10 text-xl">
              <h2 className="mb-4 font-bold text-center">Dinesh Hostel</h2>
              <div className="flex flex-col gap-5 mb-1">
                <p className="flex items-center">
                  <FaBed className="mr-2 text-xl" />
                  <span className="text-lg">Girls Hostel</span>
                </p>
                <p className="flex items-center">
                  <FaPhoneAlt className="mr-2 text-xl" />
                  <span className="text-lg">9767300355, 9803800847</span>
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="mr-2 text-xl" />
                  <span className="text-lg">salindagirlshostel@gmail.com</span>
                </p>

                <p className="flex items-center">
                  <FaBed className="mr-2 text-xl" />
                  <span className="text-lg">75 (Total Beds)</span>
                </p>
                <p className="flex items-center ">
                  <FaBed className="mr-2 text-xl" />
                  <span className="text-lg">58 (Available Beds)</span>
                </p>
              </div>
              <div className="flex justify-center">
                <button className="px-3 py-3 mt-5 text-sm font-bold text-white bg-purple-500 rounded-full">
                  BOOK NOW
                </button>
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
