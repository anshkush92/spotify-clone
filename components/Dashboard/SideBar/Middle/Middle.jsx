import React from "react";

import Search from "./Search/Search";
import Common from "./Cards/Common/Common";

const Middle = () => {
  return (
    <section className="ml-60 flex flex-col flex-grow py-6 justify-center gap-y-10 items-start  pl-[calc(240px_-_232px)] pr-[calc(240px_-_216px)]">
      <Search></Search>
      <Common></Common>
    </section>
  );
};

export default Middle;
