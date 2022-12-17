import { useCallback, useReducer } from "react";

import SpotifyApiData from "../context/SpotifyApiData";

import spotifyApiDataReducer, {
  ACTIONS,
  initialState,
} from "../reducers/SpotifyApiDataReducer";

const SpotifyApiDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(spotifyApiDataReducer, initialState);
  console.log(state);

  const getUserPlaylists = useCallback((userPlaylists) => {
    console.log("userPlaylists: ", userPlaylists);
    dispatch({
      type: ACTIONS.GET_USER_PLAYLISTS,
      payload: { userPlaylists },
    });
  }, []);

  const getSongs = (songs) => {
    console.log("songs: ", songs);
    dispatch({
      type: ACTIONS.GET_SONGS,
      payload: { songs },
    });
  };

  const getArtists = (artists) => {
    console.log("artists: ", artists);
    dispatch({
      type: ACTIONS.GET_ARTISTS,
      payload: { artists },
    });
  };

  const getAlbums = (albums) => {
    console.log("albums: ", albums);
    dispatch({
      type: ACTIONS.GET_ALBUMS,
      payload: { albums },
    });
  };

  const getPlaylists = (playlists) => {
    console.log("playlists: ", playlists);
    dispatch({
      type: ACTIONS.GET_PLAYLISTS,
      payload: { playlists },
    });
  };

  return (
    <SpotifyApiData.Provider
      value={{
        state,
        getUserPlaylists,
        getSongs,
        getArtists,
        getAlbums,
        getPlaylists,
      }}
    >
      {children}
    </SpotifyApiData.Provider>
  );
};

export default SpotifyApiDataProvider;
