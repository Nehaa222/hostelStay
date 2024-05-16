import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useAuth } from "../providers/authProvider";

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

  return (
    <div className="flex h-[250px] w-[750px] shadow-2xl rounded-2xl bg-slate-200">
      <img
        src={
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsfGVufDB8fDB8fHww"
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
