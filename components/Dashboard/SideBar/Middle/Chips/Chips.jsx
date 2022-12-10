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
    <div className="flex flex-row gap-x-2">
      {chips.map((chip, index) => (
        <button key={index} className="chip">
          {chip}
        </button>
      ))}
    </div>
  );
};

export default Chips;
