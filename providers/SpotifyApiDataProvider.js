import { useEffect, useReducer } from "react";

import SpotifyApiData from "../context/SpotifyApiData";

const SpotifyApiDataProvider = ({ children }) => {
  return (
    <SpotifyApiData.Provider value={{}}>{children}</SpotifyApiData.Provider>
  );
};

export default SpotifyApiDataProvider;
