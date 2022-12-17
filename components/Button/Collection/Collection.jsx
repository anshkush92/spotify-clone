import React from "react";
import { useRouter } from "next/router";

const Collection = ({ children, navLink }) => {
  const router = useRouter();

  return (
    <button
      className="text-white font-bold hover:bg-[#333333] active:bg-[#333333] focus:bg-[#333333] p-2 rounded text-md"
      onClick={() => router.push(navLink)}
    >
      {children}
    </button>
  );
};

export default Collection;
