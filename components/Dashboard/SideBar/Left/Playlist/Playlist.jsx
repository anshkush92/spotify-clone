import React from "react";

const Playlist = ({ userPlaylist }) => {
  return (
    <div className="overflow-y-scroll flex flex-col gap-y-4 text-base cursor-default scrollbar truncate overflow-x-hidden">
      {userPlaylist?.map(({ name, id, uri }) => (
        <div key={id} className="hover:text-white">
          <a
            href={uri}
            target="_blank"
            rel="noreferrer"
            className="focus:text-white"
          >
            {name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
