import { useEffect, useState, useContext } from "react";

import SpotifyApi from "../../../../context/SpotifyApi";
import SpotifyApiData from "../../../../context/SpotifyApiData";

import Search from "./Search/Search";
import Common from "./Cards/Common/Common";
import Artist from "./Cards/Artist/Artist";
import Browse from "./Cards/Browse/Browse";
import Tracks from "../../../Tracks/Tracks";

const Middle = () => {
  // For getting the spotify APi from the context store
  const { spotifyApi } = useContext(SpotifyApi);

  // For getting the getUserPlaylists from the context store
  const { getUserPlaylists, search, state } = useContext(SpotifyApiData);

  // State for managing the search results and using them in the Middle
  const { playlists, albums } = state;

  // Only need to run 1 time, when the component is mounted
  useEffect(() => {
    // Getting the playlist of the Current user
    spotifyApi.getUserPlaylists().then(
      (response) => {
        console.log(response.body);
        getUserPlaylists(
          response.body.items.map((userPlaylist) => {
            return {
              name: userPlaylist.name,
              id: userPlaylist.id,
              image: userPlaylist.images[0]?.url,
              uri: userPlaylist.external_urls?.spotify,
            };
          })
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }, [spotifyApi, getUserPlaylists]);

  return (
    <section
      className={`ml-60 flex flex-col flex-grow py-6 justify-center ${
        search ? "gap-y-5" : "gap-y-8"
      } items-start  pl-[calc(240px_-_232px)] pr-[calc(240px_-_216px)]`}
    >
      <Search></Search>

      {!search && <Browse></Browse>}

      {search && (
        <>
          <Tracks>Songs</Tracks>
          <Common data={albums}>Albums</Common>
          <Common data={playlists}>Playlists</Common>
          <Artist></Artist>
        </>
      )}
      <hr className="divider"></hr>
    </section>
  );
};

export default Middle;
