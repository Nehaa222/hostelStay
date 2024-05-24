import React, { useState, useEffect } from "react";
import image1 from "../images/girls4.jpeg";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { Button } from "@nextui-org/react";
import { useAuth } from "../providers/authProvider";
import { useParams } from "react-router-dom";

const BookingConfirmation = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 text-center bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-black rounded-full">
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
        <p className="mb-2 text-lg font-semibold">
          The booking has been successfully made
        </p>
        <p className="mb-4 text-gray-600">
          We will be informing you further about the booking via mail or contact
          number
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 text-white bg-purple-500 rounded"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

function Userbooking() {
  const { id } = useParams();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [logged, session] = useAuth();
  const [hostelDetails, setHostelDetails] = useState(null);
  const [formValues, setFormValues] = useState({
    bedSelection: "",
    lengthOfStay: "",
    fullName: "",
    address: "",
    mobileNumber: "",
    email: "",
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
    if (!formValues.bedSelection)
      formErrors.bedSelection = "Bed Selection is required";
    if (!formValues.lengthOfStay)
      formErrors.lengthOfStay = "Length of Stay is required";
    if (!formValues.fullName) formErrors.fullName = "Full Name is required";
    if (!formValues.address) formErrors.address = "Address is required";
    if (!formValues.mobileNumber)
      formErrors.mobileNumber = "Mobile Number is required";
    if (!formValues.email) formErrors.email = "Email Address is required";
    return formErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = [];
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("https://hostelstay.onrender.com/bookings", {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${session}`,
          },
          body: JSON.stringify({
            booking_id: id,
            name:formValues.fullName,
            hostelName:hostelDetails.name,
            location: formValues.location,
            selectedBed: formValues.bedSelection,
            status: "pending",
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to create booking");
        }
        setShowConfirmation(true);
      } catch (error) {
        console.error("Error creating booking:", error);
        setErrors({ booking: "Failed to create booking" });
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await fetch(`https://hostelstay.onrender.com/hostels/${id}`);
        const data = await response.json(); // Assuming the response data structure matches what you expect
        setHostelDetails(data);
        console.log(hostelDetails)
      } catch (error) {
        console.error("Error fetching hostel details:", error);
      }
    };

    fetchHostelDetails();
  }, [id]);


  if (!hostelDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showConfirmation && (
        <BookingConfirmation onClose={handleCloseConfirmation} />
      )}
      <div className="flex w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <div className="flex-1">
          <h2 className="mb-4 text-lg font-semibold">Guest Information</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700">Bed Selection</label>
                <input
                  type="number"
                  name="bedSelection"
                  value={formValues.bedSelection}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.bedSelection && (
                  <p className="text-sm text-red-500">{errors.bedSelection}</p>
                )}
              </div>
              <div>
              <label className="block text-gray-700">Hostel Name</label>
              <input
                type="text"
                disabled
                name="hostelName"
                value={hostelDetails.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.fullName && (
                <p className="text-sm text-red-500">{errors.hostelName}</p>
              )}
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
              {errors.fullName && (
                <p className="text-sm text-red-500">{errors.fullName}</p>
              )}
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
              {errors.address && (
                <p className="text-sm text-red-500">{errors.address}</p>
              )}
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700">Mobile Number</label>
                <input
                  type="number"
                  name="mobileNumber"
                  value={formValues.mobileNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.mobileNumber && (
                  <p className="text-sm text-red-500">{errors.mobileNumber}</p>
                )}
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
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>
            {!logged ?  <Button
              color="danger"
              type="submit"
              className="w-full p-2 text-lg font-semibold text-white rounded"

            >
             You must login to book
            </Button>  : <Button
              color="success"
              type="submit"
              className="w-full p-2 text-lg font-semibold text-white rounded"

            >
              Book Now
            </Button>}
            
          </form>
        </div>
        <div className="flex flex-col items-center w-1/3 p-4 ml-4 font-thin text-black rounded-lg bg-slate-200">
          <h2 className="mb-2 text-xl font-semibold">{hostelDetails.name}</h2>
          <img
            src={image1}
            alt="Selected Hostel"
            className="mb-4 rounded h-[200px] w-[200px]"
          />
          <div className="text-center">
            <p className="flex items-center font-semibold">
              <FaPhone className="mr-2" /> {hostelDetails.phoneNumber}
            </p>
            <p className="flex items-center font-semibold">
              <MdLocationOn className="mr-2" /> {hostelDetails.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userbooking;
