import React from "react";

import Left from "./SideBar/Left/Left";
import Middle from "./SideBar/Middle/Middle";
import Right from "./SideBar/Right/Right";

import SpotifyWebApi from "spotify-web-api-node";

// Creating an instance of SpotifyWebApi ---> Wrapper for SPOTIFY API
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: "http://localhost:3000/api/auth/callback/spotify",
});

const Dashboard = () => {
  return (
    <main>
      <Left></Left>
      <Middle></Middle>
      {/* <Right></Right> */}
    </main>
  );
};

export default Dashboard;
