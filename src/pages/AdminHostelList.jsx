import { Button } from "@nextui-org/react";
import HostelCard from "../admin/HostelCard";
import DashboardNav from "../admin/DashboardNav";
function AdminHostelList() {
  return (
    <div className="flex gap 5">
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
          <div>
            <HostelCard />
          </div>
          <div>
            <HostelCard />
          </div>
          <div>
            <HostelCard />
          </div>
          <div>
            <HostelCard />
          </div>
          <div>
            <HostelCard />
          </div>
          <div>
            <HostelCard />
          </div>
          <div>
            <HostelCard />
          </div>
          <div>
            <HostelCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHostelList;
