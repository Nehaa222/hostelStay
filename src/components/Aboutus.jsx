import React from "react";
import namaste from "../images/namaste.jpg";
console.log(namaste);
const Aboutus = () => {
  return (
    <div>
      <div className="mt-0 bg-black searchSection">
        <div
          // alt="Hostel image with hostelers"
          className="w-full h-[350px] bg-contain bg-[url('./images/about.png')] bg-black opacity-50 blur-sm"
        ></div>

        <h1 className="text-4xl font-bold centered text-seto">
          {"About Us".toUpperCase()} <br />
          <small className="text-2xl font-semibold ">
            A few words about us
          </small>
        </h1>
      </div>
      <section className=" bg-gray-200 border-2  h-[auto]">
        <div className="border-none my-14 mx-16 bg-seto min-h-[750px] rounded-3xl flex py-12 px-12">
          <div className="flex flex-col w-[50vw] gap-6">
            <h1 className="text-4xl font-medium">
              {"Introduction".toUpperCase()}
            </h1>
            <span className="text-xl font-semibold">Introduction</span>
            <p className="text-[14px] opacity-80 leading-7">
              Hostelstay.com Hostel is an organization that provides IT and
              practical assistance to business executives and parents! It helps
              to add the overall hostel business! We, the person who does
              business and the service, have been ashamed to facilitate the
              problems that have been faced in daily life! There is a great deal
              of cooperation with you! Hope and faith! Our relationship is
              getting deeper and stronger! We now have our website for about 100
              hostels, where students can book in 0 of Lalitpur, 10 Morang and
              10 hostels in Kathmandu! Where Hostel's address, contact number,
              photos, food schedule, service facilities, Google Maps, hostels
              can be viewed by the businessman to keep!If the service is deemed
              to have been a hostel sub-free, you can book the room via phone
              via email via the hostel's Facebook page or by online! In the
              mobile of the businessman, S.M.Bookie Alert S. via S.M.S will go!
              At the Hostel Service Datcom you have the Central Working
              Committee of the Nepal Hostel Association, Kathmandu District
              Working Committee, Lalitpur District Working Committee, Morang
              District Working Committee and the name, post, address, You can
              also see and contact the contact number and the name of the
              hostel! The hostel service, which provides information about the
              overall neha, has been jammed! We say again, your advice will be
              amulet for us! Don't add so register your hostel, hostel service
              dotcom today! Specialized hostel business is sure to get service
              through the hostel service!The hostel service will be registered
              via its hostel online and will receive its User ID and Password,
              including the certificate, and can edit all its information
              through it! Also will get your hostel's Management System package!
              In which you can set Hostel Location, Block, Floor, Room, Room
              Number, Bed Number! You can also secure online with details of
              every student in your hostel! You can see from mobile and computer
              while you need it!!You can see from mobile and computer while you
              need it!!You can see from mobile and computer while you need it!!
            </p>
          </div>
          <div>
            <img
              src={namaste}
              alt="Greeting with hands"
              className="h-[80vh] mt-24 ml-5 opacity-50 blur-[0.5px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
