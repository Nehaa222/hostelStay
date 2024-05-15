import { Input, Button } from "@nextui-org/react";
import HostelCard from "../admin/HostelCard";
import DashboardNav from "../admin/DashboardNav";
import { useState, useEffect } from "react";
import { useAuth, login } from "../providers/authProvider";


export default function AdminHostelList() {
  const [logged, session] = useAuth();
  console.log(session);
  const [hostels, setHostels] = useState([]);
  const [onAdd, setOnAdd] = useState(false);
  function handleOnSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await fetch(
          "https://hostelstay.onrender.com/admin/hostels",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // You may need to include authorization headers if required by your API
              // For example, you can include an authorization token like this:
              Authorization: `Bearer ${session}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch hostels");
        }
        const data = await response.json();
        setHostels(data); // Assuming the response data is an array of hostels
      } catch (error) {
        console.error("Error fetching hostels:", error.message);
      }
    };

    fetchHostels();
  }, [session]); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="flex gap-5">
      <DashboardNav />
      <div className="w-full">
        <div className="sticky top-[0.5px] flex justify-end mx-6 mt-8">
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
            onSubmit={handleOnSubmit}
          >
            <h3 className="text-4xl font-semibold">Add Hostel</h3>
            <Input
              type="text"
              label="Hostel Name"
              placeholder="Username"
              labelPlacement="outside"
              className="w-[50%]"
            />
            <Input
              type="text"
              label="Hostel Type"
              placeholder="Add a Hostel type"
              labelPlacement="outside"
              className="w-[50%]"
            />
            <Input
              type="text"
              label="Hostel Location"
              placeholder="Add location"
              labelPlacement="outside"
              className="w-[50%]"
            />
            <Input
              type="number"
              label="Contact"
              placeholder="Add Contact Number"
              labelPlacement="outside"
              className="w-[50%]"
            />
            <Button
              color="success"
              className="w-[25%] text-lg rounded-lg text-seto my-2 font-semibold"
            >
              Confirm
            </Button>
          </form>
        )}
        <div className="flex flex-col items-center gap-10 mt-4 mb-2 h-fit">
          {hostels.map((hostel) => (
            <div key={hostel.id}>
              <HostelCard hostel={hostel} session={session} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
