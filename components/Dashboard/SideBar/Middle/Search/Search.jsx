import { useEffect } from "react";
import { useSession } from "next-auth/react";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import Chips from "../Chips/Chips";

const Search = (props) => {
  const {
    spotifyApi,
    search,
    setSearch,
    setSearchResults,
    setSearchPlaylists,
    setSearchArtists,
    setNewRelease,
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
              artist: track.artists[0]?.name,
              album: track.album?.name,
              image: track.album.images[0]?.url,
              duration: track.duration_ms,
              previewUrl: track?.preview_url,
            };
          })
        );
      },
      (error) => {
        console.log(error);
      }
    );

    // Using the promises to search for Artists
    spotifyApi.searchArtists(search).then(
      (response) => {
        setSearchArtists(
          response.body.artists.items.map((artist) => {
            return {
              id: artist.id,
              name: artist.name,
              image: artist.images[0]?.url,
              followers: artist.followers?.total,
              artistProfile: artist.external_urls?.spotify,
              genres: artist.genres,
            };
          })
        );
      },
      (err) => {
        console.log(err);
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
              image: playlist.images[0]?.url,
              uri: playlist.external_urls?.spotify,
              tracks: playlist.tracks?.total,
              owner: playlist.owner?.display_name,
              ownerProfile: playlist.owner.external_urls?.spotify,
            };
          })
        );
      },
      (error) => {
        console.log(error);
      }
    );

    spotifyApi.getNewReleases().then(
      (response) => {
        console.log(response);
        setNewRelease(
          response.body.albums.items?.map((newRelease) => {
            return {
              name: newRelease.name,
              id: newRelease.id,
              image: newRelease.images[0]?.url,
              uri: newRelease.external_urls?.spotify,
              duration: newRelease.duration_ms,
              album: newRelease.album,
            };
          })
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }, [
    search,
    accessToken,
    spotifyApi,
    setSearchResults,
    setSearchPlaylists,
    setSearchArtists,
    setNewRelease,
  ]);

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

      {search && <Chips></Chips>}
    </div>
  );
};

export default Search;
