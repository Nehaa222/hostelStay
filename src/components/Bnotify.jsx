import React from 'react';

const Bnotify= () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
        <button className="bg-purple-500 text-white py-2 px-4 rounded">Ok</button>
      </div>
    </div>
  );
};

export default Bnotify;
