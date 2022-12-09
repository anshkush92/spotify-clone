import React from "react";

import Desktop from "../Navigation/Desktop";

import { BsArrowDownCircle } from "react-icons/bs";

const InstallApp = () => {
  return (
    <div className="flex flex-row pb-10 items-center justify-start hover:text-white">
      <Desktop icon={<BsArrowDownCircle></BsArrowDownCircle>}>
        Install App
      </Desktop>
    </div>
  );
};

export default InstallApp;
