import React from "react";

import Collection from "../../Button/Collection/Collection";
import Profile from "../../Profile/Profile";

const CollectionProfile = () => {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      <div className="flex items-start w-full justify-start gap-x-5">
        <Collection navLink="/collection/tracks">Tracks</Collection>
        <Collection navLink="/collection/playlists">Playlists</Collection>
        <Collection navLink="/collection/albums">Albums</Collection>
        <Collection navLink="/collection/artists">Artists</Collection>
      </div>
      <div className="grow">
        <Profile></Profile>
      </div>
    </div>
  );
};

export default CollectionProfile;
