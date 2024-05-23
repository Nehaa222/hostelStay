import hostel from "../images/hostel.jpg";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { Link } from "react-router-dom";
export default function () {
  return (
    <>
      <div className="bg-black searchSection">
        <div
          // src={hostel}
          // alt="Hostel image with hostelers"
          className="w-full h-96 bg-contain bg-[url('./images/hostel.jpg')] bg-black opacity-30 blur-sm"
        ></div>

        <h1 className="text-5xl font-bold centered text-seto">
          HOSTEL <br />
          <small className="text-2xl font-semibold ">
            Search an ideal hostel for all professionals
          </small>
        </h1>
      </div>
      <form className="flex items-center h-24 mt-4 bg-black justify-evenly">
        <HomeWorkIcon className="text-yellow-500" fontSize="large" />
        <span className="flex flex-col text-xl ">
          <big className="font-bold text-white">
            Search <br />
            for hostel
          </big>
        </span>
        <input type="text" placeholder="Enter hostel name" />
        <select name="location" id="" className="h-12 px-5 rounded-xl">
          <option value="">Location</option>
          <option value="">Kathmandu</option>
          <option value="">Lalitpur</option>
        </select>
        <select name="Type" id="" className="h-12 px-5 rounded-xl">
          <option value="">Type</option>
          <option value="">Boys</option>
          <option value="">Girls</option>
        </select>
        <Link to="/">
          <button className="px-4 py-3 text-lg font-bold text-white rounded-lg bg-primary-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Search
          </button>
        </Link>
      </form>
    </>
  );
}
