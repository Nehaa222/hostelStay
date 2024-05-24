import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useAuth } from "../providers/authProvider";

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

function HostelCard({ hostel, onUpdate, onDelete }) {
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [updatedHostel, setUpdatedHostel] = useState({ ...hostel });
  const [logged, session] = useAuth();

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedHostel((prevHostel) => ({
      ...prevHostel,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://hostelstay.onrender.com/admin/hostels/${hostel._id.$oid}`, {
        method: "PUT",
        headers: {
          "accept": "application/json",
          "Authorization": `Bearer ${session}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedHostel),
      });
      if (!response.ok) {
        throw new Error("Failed to update hostel");
      }
      setLoading(false);
      setEditMode(false);
      onUpdate(updatedHostel);
    } catch (error) {
      console.error("Error updating hostel:", error.message);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://hostelstay.onrender.com/admin/hostels/${hostel._id.$oid}`, {
        method: "DELETE",
        headers: {
          "accept": "application/json",
          "Authorization": `Bearer ${session}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete hostel");
      }
      onDelete(hostel._id.$oid);
    } catch (error) {
      console.error("Error deleting hostel:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to get a random image URL
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };

  return (
    <div className="flex h-[250px] w-[750px] shadow-2xl rounded-2xl bg-slate-200">
      <img
        src={
          getRandomImage()
        }
        alt=""
        className="object-cover w-250px rounded-2xl"
      />
      <div className="flex flex-col justify-between w-full">
        {editMode ? (
          <div className="flex flex-col gap-5 ml-5 mt-7">
            <Input
              type="text"
              name="name"
              label="Hostel Name"
              placeholder="Enter hostel name"
              labelPlacement="outside"
              className="text-2xl font-semibold"
              value={updatedHostel.name}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="location"
              label="location"
              placeholder="Enter hostel location"
              labelPlacement="outside"
              className="text-2xl font-semibold"
              value={updatedHostel.location}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="phoneNumber"
              label="phoneNumber"
              placeholder="Enter hostel phoneNumber"
              labelPlacement="outside"
              className="text-2xl font-semibold"
              value={updatedHostel.phoneNumber}
              onChange={handleChange}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-5 ml-5 mt-7">
            <p className="text-2xl font-semibold">{hostel.name}</p>
            <p className="text-2xl font-semibold">{hostel.location}</p>
            <p className="text-2xl font-semibold">{hostel.phoneNumber}</p>
          </div>
        )}
        <div className="flex justify-end w-full gap-4 px-3 mb-3">
          {editMode ? (
            <>
              <Button
                color="success"
                className="text-lg text-seto"
                onClick={handleUpdate}
                disabled={loading}
              >
                {loading ? "Updating..." : "Save"}
              </Button>
              <Button
                color="default"
                className="text-lg"
                onClick={toggleEditMode}
                disabled={loading}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                color="success"
                className="text-lg text-seto"
                onClick={toggleEditMode}
                disabled={loading}
              >
                {loading ? "Updating..." : "Edit"}
              </Button>
              <Button
                color="danger"
                className="text-lg"
                onClick={handleDelete}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete"}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HostelCard;
