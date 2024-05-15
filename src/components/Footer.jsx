import NearMeIcon from "@mui/icons-material/NearMe";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="mt-0 bg-[#3975A7] py-10 px-8 w-max-full h-fit text-seto flex">
        <aside className="flex flex-col items-start gap-6">
          <h1 className="text-3xl leading-loose tracking-widest">
            Hostel Stay
          </h1>
          <small>
            Hostel Stay Pvt Ltd is an organization that is <br />
            helping hostel businesses and students who <br />
            want to stay in hostels in various ways. On this <br />
            website, you can get information and book <br />
            hostels in major cities of Nepal, Kathmandu,
            <br />
            Bhaktapur, Lalitpur, Chitwan, Morang. You can <br />
            also get the name, position and contact <br />
            number of Nepal Hostel Association Central <br />
            Working Committee, Kathmandu, Lalitpur,
            <br /> Chitwan, Morang, Kavre District Working <br />
            Committee. You can select and purchase the <br />
            necessary items for the hostel. From this <br />
            website, the hostel manager can also register <br />
            the hostel in the Hostel booking and <br />
            management system. "Ease of hostel business <br />
            is our success"
          </small>
          <button className="px-3 py-1 text-lg font-semibold transition ease-in-out delay-150 border-2 border-solid border-seto hover:bg-seto hover:text-black rounded-xl">
            <Link to="/about">Read more</Link>
          </button>
        </aside>
        <hr className="ml-8 border-2 border-dashed border-seto min-h-96" />
        <main className="mt-5 ml-16">
          <div className="flex gap-32 contacts">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-1">
                <NearMeIcon />
                <p className="text-sm font-semibold">ADDRESS</p>
              </span>
              <h2 className="ml-2 text-lg font-semibold">Lalitpur</h2>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex flex-row items-center gap-1">
                <CallIcon />
                <p className="text-sm font-semibold">PHONE</p>
              </span>
              <h2 className="ml-2 text-lg font-semibold">9866200051</h2>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex flex-row items-center gap-1">
                <MailOutlineIcon />
                <p className="text-sm font-semibold">EMAIL</p>
              </span>
              <h2 className="ml-2 text-lg font-semibold">
                hostelstay@gmail.com
              </h2>
            </div>
          </div>
          <hr className="mt-3 border-dotted" />
          <div className="flex justify-between gap-16 mt-8 services">
            <div>
              <h1 className="mb-4 text-xl font-semibold">Our Services</h1>
              <ul className="flex flex-col gap-2 ">
                <li className="hover:opacity-50">
                  <a href="">Hostel Booking System</a>
                </li>
                <li className="hover:opacity-50">
                  <a href="">Registration & Renewal</a>
                </li>
                <li className="hover:opacity-50">
                  <a href="">Worker</a>
                </li>
                <li className="hover:opacity-50">
                  <a href="">Training/Orientation</a>
                </li>
                <li className="hover:opacity-50">
                  <a href="">Social media management</a>
                </li>
                <li className="hover:opacity-50">
                  <a href="">Design/Printing</a>
                </li>
                <li className="hover:opacity-50">
                  <a href="">Hostel Sales/Purchase</a>
                </li>
                <li className="hover:opacity-50">
                  <a href="">Sale of essential items for hostels</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="mb-4 text-xl font-semibold">About this site</h1>
              <p className="cursor-pointer text-xm hover:opacity-50">
                Terms & Conditions
              </p>
            </div>
            <div className="flex flex-col items-center ml-10">
              <h1 className="text-xl font-semibold">Social Media</h1>
              <div className="flex gap-4 py-5 ">
                <FacebookIcon
                  className="cursor-pointer hover:text-facebook"
                  fontSize="large"
                />
                <InstagramIcon
                  className="cursor-pointer hover:text-instagram"
                  fontSize="large"
                />
                <XIcon
                  className="cursor-pointer hover:text-x"
                  fontSize="large"
                />
                <YouTubeIcon
                  className="border-solid cursor-pointer hover:text-youtube"
                  fontSize="large"
                />
              </div>
              <p className="text-xl font-semibold">Contact Us</p>
            </div>
          </div>
        </main>
      </footer>
      <p className="pb-5 text-center bg-[#3975A7] text-xm text-seto">
        Copyright © {new Date().getFullYear()} Hostel Stay Pvt. Ltd Designs &
        Developed by Shahash.
      </p>
    </>
  );
}

