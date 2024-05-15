<<<<<<< HEAD
=======
import DashboardNav from "../admin/DashboardNav";
import { Input, Button } from "@nextui-org/react";
>>>>>>> 773d6bf8692d1bfdbb662a3ea8c9ac1b6ec1828f
import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { MailIcon } from "../components/MailIcon";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../components/EyeFilledIcon";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useAuth, login } from "../providers/authProvider";
import Admin from "../admin/Admin";

function AdminMyProfilePage() {
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState(false);
  const [userValue, setUserValue] = useState("");
  const [mailValue, setMailValue] = useState("");
  const [password, setPassword] = useState("");
  const [logged, session] = useAuth();

  const updateUserProfile = async () => {
    try {
      // Prepare the updated user profile data
      const userProfileData = {
        username: userValue,
        email: mailValue,
        password: password,
      };

      // Send a PUT request to update the user profile
      const response = await fetch("https://hostelstay.onrender.com/users/me/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Add authorization headers if needed
          "Authorization": `Bearer ${session}`,
        },
        body: JSON.stringify(userProfileData),
      });

      // Check if the request was successful
      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("User profile updated successfully");
      } else {
        // Handle error, e.g., show an error message
        console.error("Failed to update user profile");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <div className="flex gap-10">
      <DashboardNav />
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full mt-14">
          <h1 className="text-2xl font-thin">User Account Settings</h1>
          <Button
            color="success"
            className="mr-10 text-lg text-seto"
            onClick={() => {
              setEdit(!edit);
            }}
          >
            Edit
          </Button>
        </div>
        <form className="flex flex-col gap-10 mt-5">
          <Input
            type="text"
            label="Username"
            placeholder="Username"
            labelPlacement="outside"
            className="w-[45%]"
            startContent={<FaUser className="flex-shrink-0 text-xl pointer-events-none text-default-400" />}
            value={userValue}
            onChange={(e) => {
              setUserValue(e.target.value);
            }}
          />
          <Input
            type="email"
            label="Email"
            placeholder="gmail@example.com"
            labelPlacement="outside"
            startContent={<MailIcon className="flex-shrink-0 text-xl pointer-events-none text-default-400" />}
            className="w-[45%]"
            onChange={(e) => {
              setMailValue(e.target.value);
            }}
            value={mailValue}
          />
          <Input
            type={state ? "text" : "password"}
            label="Password"
            placeholder="Password"
            labelPlacement="outside"
            endContent={
              state ? (
                <EyeFilledIcon
                  className="flex-shrink-0 text-xl cursor-pointer text-default-400"
                  value={state}
                  onClick={() => setState(!state)}
                />
              ) : (
                <EyeSlashFilledIcon
                  className="flex-shrink-0 text-xl cursor-pointer text-default-400"
                  value={state}
                  onClick={() => setState(!state)}
                />
              )
            }
            startContent={<RiLockPasswordFill className="flex-shrink-0 text-xl pointer-events-none text-default-400" />}
            className="w-[45%]"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          {edit && (
            <Button color="success" className="w-[45%] text-seto text-lg" onClick={updateUserProfile}>
              Save Changes
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}

export default AdminMyProfilePage;
