import hostel from "../images/hostel.jpg";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
export default function () {
  return (
    <>
      <div className="bg-black searchSection">
        <div
          // src={hostel}
          // alt="Hostel image with hostelers"
          className="w-full h-96 bg-contain bg-[url('/images/hostel.jpg')] bg-black opacity-30 blur-sm"
        ></div>

        <h1 className="text-5xl font-bold centered text-seto">
          HOSTEL <br />
          <small className="text-2xl font-semibold ">
            Search an ideal hostel for all professionals
          </small>
        </h1>
      </div>
      <form className="flex items-center h-24 mt-4 bg-black justify-evenly">
        <HomeWorkIcon className="text-yellow-500" />
        <span className="flex flex-col text-xl ">
          <big className="font-bold text-white">
            Search <br />
            for hostel
          </big>
        </span>
        <input type="text" placeholder="Enter hostel name" />
        <input type="text" placeholder="district" className="" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Hostel type" />
        <button className="px-4 py-3 text-lg font-bold bg-[#91B8d9] rounded-lg">
          Search
        </button>
      </form>
    </>
  );
}
