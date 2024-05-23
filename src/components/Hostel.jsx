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
import { Link } from "react-router-dom";
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
          
          
        </div>
      </div>
    </div>
  );
};

export default Hostel;