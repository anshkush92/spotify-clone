import React from "react";

import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 translate(-50%, -50%)">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
