import React, { useState } from 'react';
import image1 from "../images/girls4.jpeg";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoBed } from "react-icons/io5";

const BookingConfirmation = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="mb-4">
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>
        <p className="text-lg font-semibold mb-2">The booking has been successfully made</p>
        <p className="text-gray-600 mb-4">
          We will be informing you further about the booking via mail or contact number
        </p>
        <button onClick={onClose} className="bg-purple-500 text-white py-2 px-4 rounded">Ok</button>
      </div>
    </div>
  );
};

function Booknow() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formValues, setFormValues] = useState({
    bedSelection: '',
    lengthOfStay: '',
    fullName: '',
    address: '',
    mobileNumber: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formValues.bedSelection) formErrors.bedSelection = 'Bed Selection is required';
    if (!formValues.lengthOfStay) formErrors.lengthOfStay = 'Length of Stay is required';
    if (!formValues.fullName) formErrors.fullName = 'Full Name is required';
    if (!formValues.address) formErrors.address = 'Address is required';
    if (!formValues.mobileNumber) formErrors.mobileNumber = 'Mobile Number is required';
    if (!formValues.email) formErrors.email = 'Email Address is required';
    return formErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setShowConfirmation(true);
    } else {
      setErrors(formErrors);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {showConfirmation && <BookingConfirmation onClose={handleCloseConfirmation} />}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full flex">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Guess Information</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700">Bed Selection</label>
                <input
                  type="text"
                  name="bedSelection"
                  value={formValues.bedSelection}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.bedSelection && <p className="text-red-500 text-sm">{errors.bedSelection}</p>}
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Length of Stay (in Month)</label>
                <input
                  type="text"
                  name="lengthOfStay"
                  value={formValues.lengthOfStay}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.lengthOfStay && <p className="text-red-500 text-sm">{errors.lengthOfStay}</p>}
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formValues.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formValues.mobileNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
              </div>
              <div className="flex-1">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>
            <button type="submit" className="w-full p-2 bg-gray-800 text-white rounded">Book Now</button>
          </form>
        </div>
        <div className="w-1/3 bg-gray-200 p-4 rounded-lg ml-4 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Your Selection</h2>
          <img src={image1} alt="Selected Hostel" className="mb-4 rounded h-[200px] w-[200px]" />
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

export default Booknow;
