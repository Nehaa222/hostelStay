import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
const Contacts = () => {
  return (
    <div>
      <div className="bg-black searchSection">
        <div className="w-full h-64 bg-contain bg-[url('./images/contact.png')] bg-seto opacity-40 blur-[2px]"></div>

        <h1 className="text-4xl font-bold centered text-seto">
          {"Contact Us".toUpperCase()}
        </h1>
      </div>
      <div className="bg-[#3975A7] h-96 py-20 px-20">
        <div className="text-center text-seto">
          <h1 className="mb-3 text-3xl font-semibold">
            {"GET IN TOUCH".toUpperCase()}
          </h1>
          <p className="flex-col">
            <div>
              Our customer service approach is simple : you are our client, and
              strive to provide the best possible service.
            </div>
            <div>
              So tell us : What can we do for you today? Please contact us and
              let us know.
            </div>
          </p>
        </div>
        <div className="flex justify-around mt-14">
          <div className="flex flex-col items-center gap-5 text-xl font-semibold text-seto">
            <IoLocationSharp className="text-5xl" />
            <p className="text-lg font-semibold">Kathmandu</p>
          </div>
          <div className="flex flex-col items-center gap-5 text-xl font-semibold text-seto">
            <CiMail className="text-5xl" />
            <p className="text-lg font-semibold">
              hostelmanagementsystem10@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 text-xl font-semibold text-seto">
            <BsTelephone className="text-5xl" />
            <p className="text-lg font-semibold">014567891</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
