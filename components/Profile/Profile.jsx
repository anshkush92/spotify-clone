import React from "react";

import Dropdown from "./Dropdown";

/* eslint-disable @next/next/no-img-element */
const Profile = () => {
  return (
    <div className="text-white z-100 absolute right-10 top-5">
      <div>
        <img
          src="https://res.cloudinary.com/dicbnntfh/image/upload/v1670681049/spotify-clone/playlistCover_jestk7.jpg"
          alt="Profile"
        >
          anshkush92
        </img>
      </div>
      <Dropdown></Dropdown>
    </div>
  );
};

export default Profile;
