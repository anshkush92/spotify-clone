import { useContext } from "react";
import SpotifyApiData from "../../../../../context/SpotifyApiData";

const Playlist = () => {
  const { state } = useContext(SpotifyApiData);
  const { userPlaylists } = state;

  return (
    <div className="overflow-y-scroll flex flex-col gap-y-4 h-52 text-base cursor-default scrollbar truncate overflow-x-hidden">
      {userPlaylists?.map(({ name, id, uri }) => (
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
