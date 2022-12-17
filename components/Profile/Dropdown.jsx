import React from "react";

const Dropdown = ({ closeProfile }) => {
  return (
    <div
      className="absolute bg-[#201f1f] p-2 rounded-md flex flex-col gap-y-1 w-max right-0"
      onClick={() => closeProfile(false)}
    >
      <a
        href="https://www.spotify.com/in-en/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account"
        target="_blank"
        rel="noreferrer"
        className="cursor-default"
      >
        <div>Account</div>
      </a>

      <div>Profile</div>
      <a
        href="https://www.spotify.com/in-en/premium/"
        target="_blank"
        rel="noreferrer"
        className="cursor-default"
      >
        <div>Upgrade to Premium</div>
      </a>
      <a
        href="https://open.spotify.com/preferences"
        target="_blank"
        rel="noreferrer"
        className="cursor-default"
      >
        <div>Settings</div>
      </a>
      <hr></hr>
      <div>Logout</div>
    </div>
  );
};

export default Dropdown;
