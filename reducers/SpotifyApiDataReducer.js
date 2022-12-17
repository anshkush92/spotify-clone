export const ACTIONS = {
  GET_USER_PLAYLISTS: "GET_USER_PLAYLISTS",
  GET_SONGS: "GET_SONGS",
  GET_ARTISTS: "GET_ARTISTS",
  GET_ALBUMS: "GET_ALBUMS",
  GET_PLAYLISTS: "GET_PLAYLISTS",
};

export const initialState = {
  userPlaylists: [],
  songs: [],
  artists: [],
  albums: [],
  playlists: [],
};

const spotifyApiDataReducer = (state, action) => {
  const { type, payload } = action;

  if (type === ACTIONS.GET_USER_PLAYLISTS) {
    //   Means copy the state and then update the userPlaylists property
    return { ...state, userPlaylists: payload.userPlaylists };
  } else if (type === ACTIONS.GET_SONGS) {
    return { ...state, songs: payload.songs };
  } else if (type === ACTIONS.GET_ARTISTS) {
    return { ...state, artists: payload.artists };
  } else if (type === ACTIONS.GET_ALBUMS) {
    return { ...state, albums: payload.albums };
  } else if (type === ACTIONS.GET_PLAYLISTS) {
    return { ...state, playlists: payload.playlists };
  } else {
    return state;
  }
};

export default spotifyApiDataReducer;
