import React from "react";
import Contacts from "../components/Contacts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Formcontact from "../components/Formcontact";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Contacts />
      <Formcontact />
      <Footer />
    </div>
  );
};

export default Contact;
