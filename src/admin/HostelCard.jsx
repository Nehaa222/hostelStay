import { Button } from "@nextui-org/react";
import { useState } from "react";

function HostelCard({ hostel, session }) {
  const [loading, setLoading] = useState(false);
  const hostel_id = hostel._id.$oid;

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://hostelstay.onrender.com/admin/hostels/${hostel_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session}`,
          },
          body: JSON.stringify(hostel), // Assuming hostel contains updated data
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update hostel");
      }
      // If update is successful, you might want to handle success here
    } catch (error) {
      console.error("Error updating hostel:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://hostelstay.onrender.com/admin/hostels/${hostel_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete hostel");
      }
      // If delete is successful, you might want to handle success here
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
        <div className="flex flex-col gap-5 ml-5 mt-7">
          <p className="text-2xl font-semibold">{hostel.name}</p>
          <p className="text-2xl font-semibold">{hostel.address}</p>
          <p className="text-2xl font-semibold">{hostel.phone}</p>
        </div>
        <div className="flex justify-end w-full gap-4 px-3 mb-3">
          <Button
            color="success"
            className="text-lg text-seto"
            onClick={handleUpdate}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update"}
          </Button>
          <Button
            color="danger"
            className="text-lg"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HostelCard;
