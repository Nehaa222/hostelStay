import DashboardNav from "../admin/DashboardNav";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { MailIcon } from "../components/MailIcon";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../components/EyeFilledIcon";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
function AdminMyProfilePage() {
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState(false);
  const [userValue, setUserValue] = useState("");
  const [mailValue, setMailValue] = useState("");
  const [password, setPassword] = useState("");
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
            type="email"
            label="Username"
            placeholder="Username"
            labelPlacement="outside"
            className="w-[45%]"
            startContent={
              <FaUser className="flex-shrink-0 text-xl pointer-events-none text-default-400" />
            }
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
            startContent={
              <MailIcon className="flex-shrink-0 text-xl pointer-events-none text-default-400" />
            }
            className="w-[45%]"
            onChange={(e) => {
              setMailValue(e.target.value);
            }}
            value={mailValue}
          />
          <Input
            type={state ? "email" : "password"}
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
            startContent={
              <RiLockPasswordFill className="flex-shrink-0 text-xl pointer-events-none text-default-400" />
            }
            className="w-[45%]"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          {edit && (
            <Button color="success" className="w-[45%] text-seto text-lg">
              Save Changes
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}

export default AdminMyProfilePage;
