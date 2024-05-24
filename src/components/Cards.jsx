import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarRateIcon from "@mui/icons-material/StarRate";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AspectRatio from "@mui/joy/AspectRatio";

// Array of random image URLs
const randomImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJDJ6-Imc6T0bTk6ssNtLoArHyyjtR1NDHH7SzbcJOg&s", // Example URL, replace with actual image URLs
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBXgy2PR5JblnyNC1lMMEcbruBqB3mAfmCk4TKbnUx7Q&s", 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe3fZO7V0tgfQrYjtDruSYLjSgAGiBnfYP-B8DxdUfXw&s",
  "https://i.guim.co.uk/img/media/a6f9c242b7ba8c41c3a5940ae552c2d0e4318393/29_246_2626_1575/master/2626.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=f37da454634e9d84412c1ab2ac799d48",
  "https://static01.nyt.com/images/2012/07/06/business/Hostel1/Hostel1-superJumbo.jpg", 
  "https://www.shutterstock.com/image-photo/young-cheerful-smiling-men-women-260nw-1090140167.jpg",
  "https://media.istockphoto.com/id/1292522563/photo/modern-college-dorm-room-with-messy-bunk-beds-and-parquet-floor.jpg?s=612x612&w=0&k=20&c=Kq36voIf8cmnQaGv0Q1UdPf3Ty5mOpHdjoFj8Ly4Phw=",

  // Add more URLs as needed
];

export default function Cards({rating, price, availability}) {
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
                  Rating: {rating}
                </p>
                <p className="flex items-center gap-2">
                  <AttachMoneyIcon />
                  Price: {price}
                </p>
                <p className="flex items-center gap-2">
                  <EventAvailableIcon />
                  Availability: {availability}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
