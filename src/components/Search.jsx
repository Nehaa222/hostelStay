import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AspectRatio from "@mui/joy/AspectRatio";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarRateIcon from "@mui/icons-material/StarRate";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const randomImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJDJ6-Imc6T0bTk6ssNtLoArHyyjtR1NDHH7SzbcJOg&s", // Example URL, replace with actual image URLs
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBXgy2PR5JblnyNC1lMMEcbruBqB3mAfmCk4TKbnUx7Q&s", 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe3fZO7V0tgfQrYjtDruSYLjSgAGiBnfYP-B8DxdUfXw&s",
  "https://i.guim.co.uk/img/media/a6f9c242b7ba8c41c3a5940ae552c2d0e4318393/29_246_2626_1575/master/2626.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=f37da454634e9d84412c1ab2ac799d48",
  "https://static01.nyt.com/images/2012/07/06/business/Hostel1/Hostel1-superJumbo.jpg", 
  // Add more URLs as needed
];

export default function SearchPage() {
  const [hostelDetails, setHostelDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const response = await fetch(`https://hostelstay.onrender.com/hostels`);
        const data = await response.json();
        setHostelDetails(data);
      } catch (error) {
        console.error("Error fetching hostel details:", error);
      }
    };

    fetchHostelDetails();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.elements.hostelName.value);
    setLocation(e.target.elements.location.value);
  };

  let hostelSearch = hostelDetails;

  if (searchQuery) {
    hostelSearch = hostelSearch.filter((hostel) =>
      hostel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (location) {
    hostelSearch = hostelSearch.filter((hostel) => hostel.location.toLowerCase() === location.toLowerCase());
  }

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };

  return (
    <>
      <div className="bg-black searchSection">
        <div
          className="w-full h-96 bg-contain bg-[url('./images/hostel.jpg')] bg-black opacity-30 blur-sm"
        ></div>

        <h1 className="text-5xl font-bold centered text-seto">
          HOSTEL <br />
          <small className="text-2xl font-semibold ">
            Search an ideal hostel for all professionals
          </small>
        </h1>
      </div>
      <form onSubmit={handleSearch} className="flex items-center h-24 mt-4 bg-black justify-evenly">
        <HomeWorkIcon className="text-yellow-500" fontSize="large" />
        <span className="flex flex-col text-xl ">
          <big className="font-bold text-white">
            Search <br />
            for hostel
          </big>
        </span>
        <input type="text" name="hostelName" placeholder="Enter hostel name" />
        <select name="location" id="" className="h-12 px-5 rounded-xl">
          <option value="">Location</option>
          <option value="Kathmandu">Kathmandu</option>
          <option value="Lalitpur">Lalitpur</option>
        </select>
        <button type="submit" className="px-4 py-3 text-lg font-bold text-white rounded-lg bg-primary-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Search
        </button>
      </form>
      {/* Render hostel details here */}
      <section className="grid grid-cols-5 gap-5 px-3 mt-3 mb-3">
      {hostelDetails && hostelSearch.map((hostel) => (
        <Link key={hostel.id} to={{ pathname: "/hostel/" + hostel._id.$oid, state: { hostel } }}>
        <div className="w-64 px-3 py-4 card rounded-xl h-[auto]">
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={getRandomImage()} // Use random image URL
              loading="lazy"
              alt={hostel.name}
              className="rounded-2xl"
            />
          </AspectRatio>
          <h2 className="mt-3 text-3xl font-bold text-center">
            {hostel.name} 
          </h2>
          <div className="mt-8 text-lg font-semibold">
            <p className="flex items-center gap-2">
              <LocationOnIcon />
              Location: {hostel.location}
            </p>
            <p className="flex items-center gap-2">
              <StarRateIcon />
              Rating: 5
            </p>
            <p className="flex items-center gap-2">
              <AttachMoneyIcon />
              Price: 12000
            </p>
            <p className="flex items-center gap-2">
              <EventAvailableIcon />
              Availability: Yes
            </p>
          </div>
        </div>
      </Link>
      ))}
      </section>
    </>
  );
}
