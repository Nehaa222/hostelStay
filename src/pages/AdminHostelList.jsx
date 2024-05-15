import { Button } from "@nextui-org/react";
import HostelCard from "../admin/HostelCard";
import DashboardNav from "../admin/DashboardNav";
import { useState, useEffect } from "react";
import { useAuth, login } from "../providers/authProvider";



export default function AdminHostelList() {
  const [logged, session] = useAuth();
  console.log(session)
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await fetch("https://hostelstay.onrender.com/admin/hostels", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // You may need to include authorization headers if required by your API
            // For example, you can include an authorization token like this:
            "Authorization": `Bearer ${session}`,
          },
        });
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
          >
            Add
          </Button>
        </div>
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