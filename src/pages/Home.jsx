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
        <Cards
          name="Bageshwori"
          location="Sankhamul"
          rating="2.0"
          price="Rs. 10K"
          availability="No!"
          image={buddha}
        />
        <Cards
          name="Chinari"
          location="Buddhanagar"
          rating="0.1"
          price="Rs. 11K"
          availability="Yes!"
          image={newImage}
        />
        <Cards
          name="Supriya"
          location="Kalopul"
          rating="3.0"
          price="Rs. 15K"
          availability="No!"
          image={image}
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
        <Cards
          name="Simran"
          location="Naxal"
          rating="9.0"
          price="Rs. 19K"
          availability="No!"
          image={girls2}
        />
        <Cards
          name="Aayusha"
          location="Patan"
          rating="7.0"
          price="Rs. 17K"
          availability="Yes!"
          image={girls3}
        />
        <Cards
          name="Herald Girls"
          location="Gwarko"
          rating="5.0"
          price="Rs. 15K"
          availability="Yes!"
          image={girls4}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
