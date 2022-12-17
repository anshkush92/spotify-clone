import { useState, useContext } from "react";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import Dropdown from "./Dropdown";
import SpotifyApi from "../../context/SpotifyApi";
import Player from "../../context/Player";

/* eslint-disable @next/next/no-img-element */
const Profile = () => {
  // For getting the User's Profile from the Spotify API using Context API
  const { user } = useContext(SpotifyApi);
  const { id, name, image, email } = user;

  // For toggling the Dropdown
  const { isProfileOpen, toggleProfileDropdown } = useContext(Player);

  return (
    <div className="text-white relative">
      <button
        className="bg-[#373636] rounded-full h-8 w-max"
        onClick={toggleProfileDropdown}
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
        <Dropdown closeProfile={toggleProfileDropdown} userId={id}></Dropdown>
      )}
    </div>
  );
};

export default Profile;
