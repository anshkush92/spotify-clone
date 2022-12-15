import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Left from "./SideBar/Left/Left";
import Middle from "./SideBar/Middle/Middle";

import SpotifyWebApi from "spotify-web-api-node";

// Creating an instance of SpotifyWebApi ---> Wrapper for SPOTIFY API
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: "http://localhost:3000/api/auth/callback/spotify",
});

const Dashboard = () => {
  const { data: session } = useSession();
  // Similar to the API key, need for the Spotify to make request to its API
  const { accessToken } = session;

  const [userPlaylist, setUserPlaylist] = useState([]);

  console.log(`User Playlist`, userPlaylist);

  // useEffect() runs every time the accessToken otherwise, will get error from the spotify API
  useEffect(() => {
    if (!accessToken) return;
    // Setting the access token to the spotifyApi instance, otherwise it will not work
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <main>
      <Left userPlaylist={userPlaylist}></Left>
      <Middle
        spotifyApi={spotifyApi}
        setUserPlaylist={setUserPlaylist}
      ></Middle>
    </main>
  );
};

export default Dashboard;
