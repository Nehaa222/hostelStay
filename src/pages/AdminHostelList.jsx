import DashboardNav from "../admin/DashboardNav";
import { Input, Button } from "@nextui-org/react";
import HostelCard from "../admin/HostelCard";
import { useState, useEffect } from "react";
import { useAuth } from "../providers/authProvider";

export default function AdminHostelList() {
  const [logged, session] = useAuth();
  console.log(session);
  const [hostels, setHostels] = useState([]);
  const [onAdd, setOnAdd] = useState(false);
  const [newHostel, setNewHostel] = useState({
    name: "",
    type: "",
    location: "",
    contact: "",
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewHostel((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleConfirm = async () => {
    try {
      const response = await fetch(
        "https://hostelstay.onrender.com/admin/hostels",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session}`,
          },
          body: JSON.stringify(newHostel),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add hostel");
      }
      const data = await response.json();
      setHostels([...hostels, data]);
      setOnAdd(false);
      setNewHostel({
        name: "",
        type: "",
        location: "",
        contact: "",
      });
    } catch (error) {
      console.error("Error adding hostel:", error.message);
    }
  };

  const handleUpdate = async (updatedHostel) => {
    try {
      const response = await fetch(
        `https://hostelstay.onrender.com/admin/hostels/${updatedHostel.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session}`,
          },
          body: JSON.stringify(updatedHostel),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update hostel");
      }
      const updatedHostels = hostels.map((hostel) =>
        hostel.id === updatedHostel.id ? updatedHostel : hostel
      );
      setHostels(updatedHostels);
      // Close the edit form or modal
    } catch (error) {
      console.error("Error updating hostel:", error.message);
    }
  };

  const handleDelete = async (hostelId) => {
    try {
      // You can implement a confirmation modal here before deleting
      const response = await fetch(
        `https://hostelstay.onrender.com/admin/hostels/${hostelId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${session}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete hostel");
      }
      const updatedHostels = hostels.filter((hostel) => hostel.id !== hostelId);
      setHostels(updatedHostels);
    } catch (error) {
      console.error("Error deleting hostel:", error.message);
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
  
    if (session) { // Conditional check for session
      fetchHostels();
    }
  }, [session]); // Remove session from dependency array

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
            onSubmit={handleConfirm}
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
              name="type"
              label="Hostel Type"
              placeholder="Enter hostel type"
              labelPlacement="outside"
              className="w-[50%]"
              value={newHostel.type}
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
          {hostels.map((hostel) => (
            <div key={hostel.id}>
              <HostelCard
                hostel={hostel}
                // onUpdate={handleUpdate}
                // onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
