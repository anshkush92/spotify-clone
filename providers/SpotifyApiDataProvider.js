import { useCallback, useReducer, useState } from "react";

import SpotifyApiData from "../context/SpotifyApiData";

import spotifyApiDataReducer, {
  ACTIONS,
  initialState,
} from "../reducers/SpotifyApiDataReducer";

const SpotifyApiDataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(spotifyApiDataReducer, initialState);

  console.log(`Search Value`, search, `State of the Spotify Data`, state);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const removeSearch = () => {
    setSearch("");
  };

  const getUserPlaylists = useCallback((userPlaylists) => {
    console.log("userPlaylists: ", userPlaylists);
    dispatch({
      type: ACTIONS.GET_USER_PLAYLISTS,
      payload: { userPlaylists },
    });
  }, []);

  const getUserArtists = useCallback((userArtists) => {
    console.log("userArtists: ", userArtists);
    dispatch({
      type: ACTIONS.GET_USER_ARTISTS,
      payload: { userArtists },
    });
  }, []);

  const getUserAlbums = useCallback((userAlbums) => {
    console.log("userAlbums: ", userAlbums);
    dispatch({
      type: ACTIONS.GET_USER_ALBUMS,
      payload: { userAlbums },
    });
  }, []);

  const getUserSongs = useCallback((userSongs) => {
    console.log("userSongs: ", userSongs);
    dispatch({
      type: ACTIONS.GET_USER_SONGS,
      payload: { userSongs },
    });
  }, []);

  const getSongs = useCallback((songs) => {
    console.log("songs: ", songs);
    dispatch({
      type: ACTIONS.GET_SONGS,
      payload: { songs },
    });
  }, []);

  const getArtists = useCallback((artists) => {
    console.log("artists: ", artists);
    dispatch({
      type: ACTIONS.GET_ARTISTS,
      payload: { artists },
    });
  }, []);

  const getAlbums = useCallback((albums) => {
    console.log("albums: ", albums);
    dispatch({
      type: ACTIONS.GET_ALBUMS,
      payload: { albums },
    });
  }, []);

  const getPlaylists = useCallback((playlists) => {
    console.log("playlists: ", playlists);
    dispatch({
      type: ACTIONS.GET_PLAYLISTS,
      payload: { playlists },
    });
  }, []);

  const getCategories = useCallback((categories) => {
    console.log("categories: ", categories);
    dispatch({
      type: ACTIONS.GET_CATEGORIES,
      payload: { categories },
    });
  }, []);

  return (
    <SpotifyApiData.Provider
      value={{
        search,
        state,
        handleSearch,
        removeSearch,
        getUserPlaylists,
        getUserArtists,
        getUserAlbums,
        getUserSongs,
        getSongs,
        getArtists,
        getAlbums,
        getPlaylists,
        getCategories,
      }}
    >
      {children}
    </SpotifyApiData.Provider>
  );
};

export default SpotifyApiDataProvider;
