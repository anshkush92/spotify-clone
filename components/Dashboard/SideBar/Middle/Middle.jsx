import React from "react";

import Search from "./Search/Search";
import Common from "./Cards/Common/Common";
import Artist from "./Cards/Artist/Artist";
import Browse from "./Cards/Browse/Browse";

const Middle = () => {
  return (
    <section className="ml-60 flex flex-col flex-grow py-6 justify-center gap-y-8 items-start  pl-[calc(240px_-_232px)] pr-[calc(240px_-_216px)]">
      <Search></Search>
      <Browse></Browse>
      <Artist></Artist>
      <Common></Common>
    </section>
  );
};

export default Middle;
