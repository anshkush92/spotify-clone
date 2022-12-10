import React from "react";

const chips = [
  "All",
  "Artists",
  "Profiles",
  "Songs",
  "Podcasts",
  "Albums",
  "Playlists",
  "Genres",
];

const Chips = () => {
  return (
    <div className="grid xs:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-2">
      {chips.map((chip, index) => (
        <button key={index} className="chip">
          {chip}
        </button>
      ))}
    </div>
  );
};

export default Chips;
