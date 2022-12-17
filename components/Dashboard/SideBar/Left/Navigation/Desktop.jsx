import { useRouter } from "next/router";
import React from "react";

const Desktop = ({ icon, children, navLink }) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-row gap-2 items-center cursor-pointer hover:text-white text-2xl"
      onClick={() => router.push(navLink)}
    >
      {icon}
      <span className="text-base">{children}</span>
    </div>
  );
};

export default Desktop;
