import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import Chips from "../Chips/Chips";

const Search = (props) => {
  const {
    spotifyApi,
    search,
    setSearch,
    searchResults,
    searchPlaylists,
    setSearchResults,
    setSearchPlaylists,
  } = props;

  const { data: session } = useSession();
  const { accessToken } = session;

  // This useEffect() runs every time the accessToken, search or spotifyApi changes as it is mentioned in the dependency array
  useEffect(() => {
    // If the search query is empty then show the categories
    if (!search) {
      spotifyApi.getCategories().then(
        (response) => {
          setSearchResults(
            response.body.categories.items.map((category) => {
              return {
                id: category.id,
                name: category.name,
                image: category.icons[0].url,
                link: category.href,
              };
            })
          );
        },
        (error) => {
          console.log(error);
        }
      );
    }

    if (!accessToken || !search) return setSearchPlaylists([]);

    // Using the promises to search for Name, Album, Artists
    spotifyApi.searchTracks(search).then(
      (response) => {
        // Getting the results of the search from the spotify API
        setSearchResults(
          response.body.tracks.items.map((track) => {
            return {
              id: track.id,
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              image: track.album.images[0].url,
              uri: track.uri,
              duration: track.duration_ms,
              previewUrl: track.preview_url,
            };
          })
        );
      },
      (error) => {
        console.log(error);
      }
    );

    // Using the promises to search for Playlistsy Search Query Understanding: Better understanding of the intent behind every user query.
    spotifyApi.searchPlaylists(search).then(
      (response) => {
        // Getting the results of the search from the spotify API
        setSearchPlaylists(
          response.body.playlists.items.map((playlist) => {
            return {
              id: playlist.id,
              name: playlist.name,
              image: playlist.images[0].url,
              uri: playlist.uri,
              tracks: playlist.tracks.total,
              owner: playlist.owner.display_name,
            };
          })
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }, [search, accessToken, spotifyApi, setSearchResults, setSearchPlaylists]);

  return (
    <div className="flex flex-col justify-start items-start gap-y-5">
      <div className="w-96 flex bg-white rounded-full items-center xs:max-w-full px-2.5">
        <AiOutlineSearch size={30}></AiOutlineSearch>
        <input
          type="text"
          className="w-full rounded-full border-transparent focus:border-transparent focus:ring-0 px-1 py-1.5 outline-none placeholder:text-[#8d8b8b] text-[15px]"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          placeholder="What do you want to listen to ?"
        ></input>
        {search && (
          <button
            className="cursor-default"
            onClick={() => {
              setSearch("");
            }}
          >
            <AiOutlineClose size={30}></AiOutlineClose>
          </button>
        )}
      </div>

      {search ? (
        <Chips></Chips>
      ) : (
        <p className="text-white text-2xl font-bold">Browse Genres</p>
      )}
    </div>
  );
};

export default Search;
