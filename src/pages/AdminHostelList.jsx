import DashboardNav from "../admin/DashboardNav";
import { Input, Button } from "@nextui-org/react";
import HostelCard from "../admin/HostelCard";
import { useState, useEffect } from "react";
import { useAuth } from "../providers/authProvider";
import { useNavigate } from "react-router-dom";

export default function AdminHostelList() {
  const [logged, session] = useAuth();
  const navigate = useNavigate();
  console.log(session);
  const [hostels, setHostels] = useState([]);
  const [onAdd, setOnAdd] = useState(false);
  const [newHostel, setNewHostel] = useState({
    name: "",
    location: "",
    phoneNumber: "",
  });

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


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHostel((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleConfirm = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch('https://hostelstay.onrender.com/admin/hostels', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${session}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHostel)
      });
      if (!response.ok) {
        throw new Error("Failed to add hostel");
      }
      const data = await response.json();
      setHostels([...hostels, data]);
      setOnAdd(false);
      setNewHostel({
        name: "",
        location: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.error("Error adding hostel:", error.message);
    }
  };


  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await fetch(
          "https://hostelstay.onrender.com/admin/hostels",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch hostels");
        }
        const data = await response.json();
        setHostels(data);
      } catch (error) {
        console.error("Error fetching hostels:", error.message);
      }
    };
  
    if (!localStorage.REACT_TOKEN_AUTH_KEY) { // Redirect if not logged in
      navigate("/login"); // Using navigate instead of history.push
    } else {
      fetchHostels();
    }
  }, [session, navigate]); // Remove session from dependency array

  // Function to get a random image URL
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };

  return (
    <div className="flex gap-5">
      <DashboardNav />
      <div className="w-full">
        <div className="sticky top-[0.5px] flex justify-between items-center mx-6 mt-8">
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold">List of Hostels</h2>
          </div>
          <Button
            radius="full"
            className="text-lg font-semibold text-white shadow-lg bg-gradient-to-tr from-pink-600 to-yellow-600"
            onClick={() => {
              setOnAdd(!onAdd);
            }}
          >
            Add
          </Button>
        </div>
        {onAdd && (
          <form
            className="mt-5 shadow-2xl w-[43%] h-[fit] m-auto rounded-xl flex flex-col items-center gap-[1.5rem]"
            onSubmit={handleConfirm} // Updated to call handleConfirm
          >
            <h3 className="text-4xl font-semibold">Add Hostel</h3>
            <Input
              type="text"
              name="name"
              label="Hostel Name"
              placeholder="Enter hostel name"
              labelPlacement="outside"
              className="w-[50%]"
              value={newHostel.name}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="location"
              label="Hostel Location"
              placeholder="Enter hostel location"
              labelPlacement="outside"
              className="w-[50%]"
              value={newHostel.location}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="contact"
              label="Contact"
              placeholder="Enter contact number"
              labelPlacement="outside"
              className="w-[50%]"
              value={newHostel.contact}
              onChange={handleInputChange}
            />
            <Button
              color="success"
              className="w-[25%] text-lg rounded-lg text-seto my-2 font-semibold"
              type="submit"
            >
              Confirm
            </Button>
          </form>
        )}
        <div className="flex flex-col items-center gap-10 mt-4 mb-2 h-fit">
          {hostels.map((hostel, index) => ( // Added index as a key
            <div key={index}>
              <HostelCard
                hostel={hostel}
                //onUpdate={handleUpdate}
                //nDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
