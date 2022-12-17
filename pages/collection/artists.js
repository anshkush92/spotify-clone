import { useContext } from "react";
import Left from "../../components/Dashboard/SideBar/Left/Left";

import Artist from "../../components/Dashboard/SideBar/Middle/Cards/Artist/Artist";
import Player from "../../components/Player/Player";
import CollectionProfile from "../../components/Header/Collection-Profile/CollectionProfile";

import SpotifyApiData from "../../context/SpotifyApiData";

const ArtistsPage = () => {
  const { state } = useContext(SpotifyApiData);
  const { userArtists } = state;

  return (
    <div>
      <Left></Left>
      <section
        className={`ml-60 flex flex-col flex-grow py-6 justify-center gap-y-8 items-start  pl-[calc(240px_-_232px)] pr-[calc(240px_-_216px)]`}
      >
        <CollectionProfile></CollectionProfile>
        <Artist artists={userArtists}></Artist>
      </section>
      <Player></Player>
    </div>
  );
};

export default ArtistsPage;
