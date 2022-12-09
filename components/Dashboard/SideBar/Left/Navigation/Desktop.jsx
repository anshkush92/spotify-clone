import React from "react";

const Desktop = ({ icon, children }) => {
  return (
    <div className="flex flex-row gap-2 items-center cursor-pointer hover:text-white text-2xl">
      {icon}
      <span className="text-base">{children}</span>
    </div>
  );
};

export default Desktop;
