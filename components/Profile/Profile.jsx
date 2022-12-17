import { useState } from "react";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useSession } from "next-auth/react";

import Dropdown from "./Dropdown";

/* eslint-disable @next/next/no-img-element */
const Profile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { data: session } = useSession();
  const { user } = session;
  console.log(session);
  const { id, name, image, email } = user;

  return (
    <div className="text-white relative">
      <button
        className="bg-[#373636] rounded-full h-8"
        onClick={() => setIsProfileOpen((previousState) => !previousState)}
      >
        <div className="flex flex-row items-center justify-start gap-x-2 px-1">
          <img
            src={image}
            alt={email}
            style={{
              height: "25px",
              width: "25px",
              borderRadius: "50%",
            }}
          ></img>

          <span className="text-sm font-bold">{name}</span>
          <div>
            {isProfileOpen ? (
              <BsChevronUp></BsChevronUp>
            ) : (
              <BsChevronDown></BsChevronDown>
            )}
          </div>
        </div>
      </button>
      {isProfileOpen && (
        <Dropdown closeProfile={setIsProfileOpen} userId={id}></Dropdown>
      )}
    </div>
  );
};

export default Profile;
