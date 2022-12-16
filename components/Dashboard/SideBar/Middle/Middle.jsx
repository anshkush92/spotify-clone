import { useEffect, useState } from "react";

import Search from "./Search/Search";
import Common from "./Cards/Common/Common";
import Artist from "./Cards/Artist/Artist";
import Browse from "./Cards/Browse/Browse";
import Home from "./Cards/Home/Home";
import PlayPause from "../../../Button/Play-Pause/PlayPause";
import Tracks from "../../../Tracks/Tracks";

const Middle = ({ spotifyApi, setUserPlaylist }) => {
  // State for managing the search in the input bar
  const [search, setSearch] = useState("");

  // State for managing the search results and using them in the Middle
  const [searchResults, setSearchResults] = useState([]);
  const [searchArtists, setSearchArtists] = useState([]);
  const [searchPlaylists, setSearchPlaylists] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  // Only need to run 1 time, when the component is mounted
  useEffect(() => {
    // Getting the playlist of the Current user
    spotifyApi.getUserPlaylists().then(
      (response) => {
        console.log(response.body);
        setUserPlaylist(
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
  }, [spotifyApi, setUserPlaylist]);

  // To check whether we are getting the correct results or not from the spotify API
  console.log(
    `Query ${search}`,
    searchResults,
    searchPlaylists,
    searchArtists,
    newRelease
  );

  return (
    <section
      className={`ml-60 flex flex-col flex-grow py-6 justify-center ${
        search ? "gap-y-5" : "gap-y-8"
      } items-start  pl-[calc(240px_-_232px)] pr-[calc(240px_-_216px)]`}
    >
      <PlayPause></PlayPause>
      <Search
        spotifyApi={spotifyApi}
        search={search}
        setSearch={setSearch}
        setSearchResults={setSearchResults}
        setSearchPlaylists={setSearchPlaylists}
        setSearchArtists={setSearchArtists}
        setNewRelease={setNewRelease}
      ></Search>

      {!search && <Browse categories={searchResults}></Browse>}

      {search && (
        <>
          <Tracks data={searchResults}>Songs</Tracks>
          <Common data={newRelease} type="playlists">
            Albums
          </Common>
          <Common data={searchPlaylists} type="playlists">
            Playlists
          </Common>
          <Artist data={searchArtists}></Artist>
          <Home></Home>
        </>
      )}
      <hr className="divider"></hr>
    </section>
  );
};

export default Middle;
