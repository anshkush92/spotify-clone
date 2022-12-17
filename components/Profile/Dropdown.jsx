import React from "react";

import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Dropdown = ({ closeProfile, userId }) => {
  const router = useRouter();

  const handleLogout = () => {
    signOut({ redirect: true });
    router.replace("/auth/signin");
  };
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

      <a
        href={`https://open.spotify.com/user/${userId}`}
        target="_blank"
        rel="noreferrer"
        className="cursor-default"
      >
        <div>Profile</div>
      </a>
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
      <div onClick={handleLogout}>Logout</div>
    </div>
  );
};

export default Dropdown;
