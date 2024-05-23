import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarRateIcon from "@mui/icons-material/StarRate";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AspectRatio from "@mui/joy/AspectRatio";

// Array of random image URLs
const randomImages = [
  "https://via.placeholder.com/400x200", // Example URL, replace with actual image URLs
  "https://via.placeholder.com/400x200", 
  "https://via.placeholder.com/400x200", 
  // Add more URLs as needed
];

export default function Cards() {
  const [hostelData, setHostelData] = useState([]);

  useEffect(() => {
    const fetchHostelData = async () => {
      try {
        const response = await fetch("https://hostelstay.onrender.com/hostels");
        if (!response.ok) {
          throw new Error("Failed to fetch hostel data");
        }
        const data = await response.json();
        setHostelData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching hostel data:", error.message);
      }
    };

    fetchHostelData();
  }, []);

  // Function to get a random image URL
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };

  return (
    <>
      <section className="grid grid-cols-5 gap-5 px-3 mt-3 mb-3">
        {hostelData.map((hostel) => (
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
                  Rating: {hostel.rating}
                </p>
                <p className="flex items-center gap-2">
                  <AttachMoneyIcon />
                  Price: {hostel.price}
                </p>
                <p className="flex items-center gap-2">
                  <EventAvailableIcon />
                  Availability: {hostel.availability}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
