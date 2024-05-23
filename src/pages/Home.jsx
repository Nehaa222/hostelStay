import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import buddha from "../images/buddha.jpg";
import newImage from "../images/new.jpg";
import image from "../images/image.jpg";
import prarambha from "../images/prarambha.jpg";
import girls1 from "../images/girls1.jpeg";
import girls2 from "../images/girls2.jpeg";
import girls3 from "../images/girls3.jpeg";
import girls4 from "../images/girls4.jpeg";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />

      <h1 className="my-3 ml-8 text-2xl font-bold">Trending Boys hostel...</h1>

      <div className="flex fle-row justify-evenly">
        <Cards
          name="Prarambha"
          location="Kathmandu"
          rating="1.0"
          price="Rs. 9K"
          availability="Yes!"
          image={prarambha}
        />
       
      </div>

      <h1 className="my-3 ml-8 text-2xl font-bold">Trending Girls hostel...</h1>
      <div className="flex fle-row justify-evenly">
        <Cards
          name="Neha"
          location="Kalopul"
          rating="6.0"
          price="Rs. 8K"
          availability="No!"
          image={girls1}
        />
       
      </div>
      <Footer />
    </div>
  );
};

export default Home;
