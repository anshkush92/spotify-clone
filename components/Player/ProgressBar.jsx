import React from "react";

const ProgressBar = ({ isMute }) => {
  return (
    <div className="w-full bg-[#5E5E5E] rounded-full h-full">
      <div
        className={`${
          isMute ? "w-0" : "w-3/4"
        } bg-white hover:bg-[#1db954] rounded-full h-full transition-all duration-150 ease-in-out`}
      ></div>
    </div>
  );
};

export default ProgressBar;
