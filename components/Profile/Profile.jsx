import { useState } from "react";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import Dropdown from "./Dropdown";

/* eslint-disable @next/next/no-img-element */
const Profile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="text-white relative">
      <button
        className="bg-[#373636] rounded-full h-8"
        onClick={() => setIsProfileOpen((previousState) => !previousState)}
      >
        <div className="flex flex-row items-center justify-start gap-x-2 px-1">
          <img
            src="https://res.cloudinary.com/dicbnntfh/image/upload/v1670681049/spotify-clone/playlistCover_jestk7.jpg"
            alt="User Profile"
            height={25}
            width={25}
            style={{ borderRadius: "100%" }}
          ></img>
          <span className="text-sm font-bold">Profile</span>
          <div>
            {isProfileOpen ? (
              <BsChevronUp></BsChevronUp>
            ) : (
              <BsChevronDown></BsChevronDown>
            )}
          </div>
        </div>
      </button>
      {isProfileOpen && <Dropdown closeProfile={setIsProfileOpen}></Dropdown>}
    </div>
  );
};

export default Profile;
