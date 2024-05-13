import image1 from "../adminImages/1.png";
import { Button } from "@nextui-org/react";
function HostelCard() {
  return (
    <div className="flex h-[250px] w-[750px] shadow-2xl rounded-2xl bg-slate-200">
      <img src={image1} alt="" className="object-cover w-250px rounded-2xl" />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-5 ml-5 mt-7">
          <p className="text-2xl font-semibold">Nepalaya Eco Hostel</p>
          <p className="text-2xl font-semibold">Putalisadak, Kathmandu</p>
          <p className="text-2xl font-semibold">9823896745, 9842356745</p>
        </div>
        <div className="flex justify-end w-full gap-4 px-3 mb-3">
          <Button color="success" className="text-lg text-seto">
            Update
          </Button>
          <Button color="danger" className="text-lg">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HostelCard;
