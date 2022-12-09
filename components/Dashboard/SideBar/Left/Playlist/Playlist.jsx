import React from "react";

const playlists = [
  "Playlist 1",
  "Playlist 2",
  "Playlist 3",
  "Playlist 4",
  "Playlist 5",
  "Playlist 6",
  "Playlist 7",
  "Playlist 8",
  "Playlist 9",
  "Playlist 10",
];

const Playlist = () => {
  return (
    <div className="overflow-y-scroll flex flex-col gap-y-4 text-base cursor-default scrollbar">
      {playlists.map((playlist, index) => (
        <div key={index} className="hover:text-white">
          {playlist}
        </div>
      ))}
    </div>
  );
};

export default Playlist;
