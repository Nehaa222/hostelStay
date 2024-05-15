import React from 'react';
import image1 from "../images/girls4.jpeg";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoBed } from "react-icons/io5";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full flex">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Guess Information</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700">Bed Selection</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Length of Stay (in Month)</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700">Mobile Number</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Email Address</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>
            <button type="submit" className="w-full p-2 bg-gray-800 text-white rounded">Book Now</button>
          </form>
        </div>
        <div className="w-1/3 bg-gray-200 p-4 rounded-lg ml-4 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Your Selection</h2>
          <img src={image1} alt="Selected Hostel" className="mb-4 rounded h-[200px] w-[200px]"/>
          <div className="text-center">
            <p className="font-semibold flex items-center"><FaPhone className="mr-2" /> 9823094567</p>
            <p className="font-semibold flex items-center"><FaPhone className="mr-2" /> 9820094467</p>
            <p className="font-semibold flex items-center"><MdOutlineEmail className="mr-2" /> Send Email</p>
            <p className="font-semibold flex items-center"><MdLocationOn className="mr-2" /> Putalisadak, Kathmandu</p>
            <p className="font-semibold flex items-center"><IoBed className="mr-2" /> Boys Hostel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
