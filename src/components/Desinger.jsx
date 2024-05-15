import React from 'react';
import { FaBed, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaViber } from "react-icons/fa";

const HostelCard = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden min-h-[600px]">
      <div className="px-10 py-8">
        <h2 className="font-bold text-3xl mb-8 text-center">SALINDA GIRLS HOSTEL</h2>
        <div className="mb-8">
          <p className="flex items-center mb-6">
            <FaBed className="mr-4 text-2xl" />
            <span className="text-lg">Girls Hostel</span>
          </p>
          <p className="flex items-center mb-6">
            <FaPhoneAlt className="mr-4 text-2xl" />
            <span className="text-lg">9767300355, 9803800847</span>
          </p>
          <p className="flex items-center mb-6">
            <FaEnvelope className="mr-4 text-2xl" />
            <span className="text-lg">salindagirlshostel@gmail.com</span>
          </p>
          <p className="flex items-center mb-6">
            <FaFacebook className="mr-4 text-2xl text-blue-500" />
            <a href="https://facebook.com" className="text-lg text-blue-500">Facebook Page</a>
          </p>
          <p className="flex items-center mb-6">
            <FaBed className="mr-4 text-2xl" />
            <span className="text-lg">75 (Total Beds)</span>
          </p>
          <p className="flex items-center mb-6">
            <FaBed className="mr-4 text-2xl" />
            <span className="text-lg">58 (Available Beds)</span>
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <button className="bg-purple-500 text-white font-bold py-3 px-6 rounded-full text-lg">
            BOOK NOW
          </button>
        </div>
      </div>
      <div className="px-10 py-8 flex items-center justify-center space-x-6">
        <a href="https://facebook.com" className="text-blue-500 text-3xl"><FaFacebook /></a>
        <a href="https://twitter.com" className="text-blue-500 text-3xl"><FaTwitter /></a>
        <a href="https://linkedin.com" className="text-blue-500 text-3xl"><FaLinkedin /></a>
        <a href="https://whatsapp.com" className="text-green-500 text-3xl"><FaWhatsapp /></a>
        <a href="https://viber.com" className="text-purple-500 text-3xl"><FaViber /></a>
        <a href="mailto:someone@example.com" className="text-gray-500 text-3xl"><FaEnvelope /></a>
      </div>
    </div>
  );
}

export default HostelCard;


