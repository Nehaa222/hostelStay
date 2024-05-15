
import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Cards from "./Cards";
import buddha from "../images/buddha.jpg";
import newImage from "../images/new.jpg";
import image from "../images/image.jpg";
import prarambha from "../images/prarambha.jpg";
import girls1 from "../images/girls1.jpeg";
import girls2 from "../images/girls2.jpeg";
import girls3 from "../images/girls3.jpeg";
import girls4 from "../images/girls4.jpeg";
import radiantGirls from "../images/radiantgirls.jpg";
import sunita from "../images/sunita.jpeg";
import sapana from "../images/sapana.jpeg";
import islington from "../images/islington.jpeg";

const Hostel = () => {
  return (
    <div>
      <div className="">
        <div className="flex flex-wrap fle-row justify-evenly">
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
          <Cards
            name="Pratik"
            location="Lalitpur"
            rating="7.0"
            price="Rs. 19K"
            availability="No!"
            image={prarambha}
          />
          <Cards
            name="Rohan"
            location="Samakhusi"
            rating="3.0"
            price="Rs. 9K"
            availability="No!"
            image={buddha}
          />
          <Cards
            name="Bikalpa"
            location="Baneshwor"
            rating="2.1"
            price="Rs. 13K"
            availability="Yes!"
            image={newImage}
          />
          <Cards
            name="Aayush"
            location="Ratopul"
            rating="6.0"
            price="Rs. 13.5K"
            availability="Yes!"
            image={image}
          />
        </div>

        <div className="flex flex-wrap fle-row justify-evenly">
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
          <Cards
            name="Radiant girls"
            location="Baneshwor"
            rating="1.0"
            price="Rs. 10K"
            availability="No!"
            image={radiantGirls}
          />
          <Cards
            name="Sapana"
            location="Baneshwor"
            rating="1.0"
            price="Rs. 15K"
            availability="Yes!"
            image={sapana}
          />
          <Cards
            name="Sunita"
            location="Baneshwor"
            rating="6.0"
            price="Rs. 12K"
            availability="No!"
            image={sunita}
          />
          <Cards
            name="Islington Girls"
            location="Ranibari"
            rating="8.0"
            price="Rs. 10K"
            availability="Yes!"
            image={islington}
          />
        </div>
      </div>
    </div>
  );
};

export default Hostel;
