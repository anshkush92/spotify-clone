import React from "react";

import { useSession } from "next-auth/react";

import Search from "./Search/Search";
import Common from "./Cards/Common/Common";
import Artist from "./Cards/Artist/Artist";
import Browse from "./Cards/Browse/Browse";
import Home from "./Cards/Home/Home";

const Middle = () => {
  const { data: session } = useSession();
  // Similar to the API key, need for the Spotify to make request to its API
  const { accessToken } = session;

  // useEffect() runs every time the accessToken changes as it is mentioned in the dependency array
  useEffect(() => {
    if (!accessToken) return;
    // Setting the access token to the spotifyApi instance, otherwise it will not work
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <section className="ml-60 flex flex-col flex-grow py-6 justify-center gap-y-8 items-start  pl-[calc(240px_-_232px)] pr-[calc(240px_-_216px)]">
      <Search></Search>
      <Home></Home>
      <Browse></Browse>
      <Artist></Artist>
      <Common></Common>
      <hr className="divider"></hr>
    </section>
  );
};

export default Middle;
