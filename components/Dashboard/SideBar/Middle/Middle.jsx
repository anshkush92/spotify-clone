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
  const {
    search,
    state,
    getUserPlaylists,
    getUserArtists,
    getUserAlbums,
    getUserSongs,
  } = useContext(SpotifyApiData);

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

    spotifyApi.getFollowedArtists().then(
      (response) => {
        console.log(
          `Artist being followed by user`,
          response.body.artists.items
        );
        getUserArtists(
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

    spotifyApi.getMySavedAlbums().then(
      (response) => {
        console.log(response.body);
        getUserAlbums(
          response.body.items.map((album) => {
            return {
              id: album.album.id,
              name: album.album.name,
              image: album.album.images[0]?.url,
              uri: album.album.external_urls?.spotify,
              tracks: album.album.total_tracks,
              owner: album.album.artists[0]?.name,
              ownerProfile: album.album.artists[0]?.external_urls?.spotify,
            };
          })
        );
      },
      (err) => {
        console.log(err);
      }
    );

    spotifyApi.getMySavedTracks().then((response) => {
      console.log(response.body);
      getUserSongs(
        response.body.items.map((song) => {
          return {
            id: song.track.id,
            name: song.track.name,
            image: song.track.album.images[0]?.url,
            uri: song.track.external_urls?.spotify,
            artist: song.track.artists[0]?.name,
            artistProfile: song.track.artists[0]?.external_urls?.spotify,
            album: song.track.album.name,
            albumProfile: song.track.album.external_urls?.spotify,
            duration: song.track.duration_ms,
            explicit: song.track.explicit,
          };
        })
      );
    });
  }, [
    spotifyApi,
    getUserPlaylists,
    getUserArtists,
    getUserAlbums,
    getUserSongs,
  ]);

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
