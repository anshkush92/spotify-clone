import { useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-node";
import { useSession } from "next-auth/react";

import SpotifyApi from "../context/SpotifyApi";

// Creating an instance of SpotifyWebApi ---> Wrapper for SPOTIFY API
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: "http://localhost:3000/api/auth/callback/spotify",
});

const SpotifyApiProvider = ({ children }) => {
  console.log(`Session, from Spotify Api Provider`, useSession());
  const { data: session } = useSession();
  // Similar to the API key, need for the Spotify to make request to its API
  const accessToken = session?.accessToken;
  // For getting the user
  const user = session?.user;

  // useEffect() runs every time the accessToken otherwise, will get error from the spotify API
  useEffect(() => {
    if (!accessToken) return;
    // Setting the access token to the spotifyApi instance, otherwise it will not work
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <SpotifyApi.Provider value={{ accessToken, spotifyApi, user }}>
      {children}
    </SpotifyApi.Provider>
  );
};

export default SpotifyApiProvider;
