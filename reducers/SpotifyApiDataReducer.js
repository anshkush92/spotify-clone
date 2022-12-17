export const ACTIONS = {
  GET_USER_PLAYLISTS: "GET_USER_PLAYLISTS",
  GET_USER_ARTISTS: "GET_USER_ARTISTS",
  GET_USER_ALBUMS: "GET_USER_ALBUMS",
  GET_USER_SONGS: "GET_USER_SONGS",
  GET_SONGS: "GET_SONGS",
  GET_ARTISTS: "GET_ARTISTS",
  GET_ALBUMS: "GET_ALBUMS",
  GET_PLAYLISTS: "GET_PLAYLISTS",
  GET_CATEGORIES: "GET_CATEGORIES",
};

export const initialState = {
  userPlaylists: [],
  userArtists: [],
  userAlbums: [],
  userSongs: [],
  songs: [],
  artists: [],
  albums: [],
  playlists: [],
  categories: [],
};

const spotifyApiDataReducer = (state, action) => {
  const { type, payload } = action;

  if (type === ACTIONS.GET_USER_PLAYLISTS) {
    //   Means copy the state and then update the userPlaylists property
    return { ...state, userPlaylists: payload.userPlaylists };
  } else if (type === ACTIONS.GET_USER_ARTISTS) {
    return { ...state, userArtists: payload.userArtists };
  } else if (type === ACTIONS.GET_USER_ALBUMS) {
    return { ...state, userAlbums: payload.userAlbums };
  } else if (type === ACTIONS.GET_USER_SONGS) {
    return { ...state, userSongs: payload.userSongs };
  } else if (type === ACTIONS.GET_SONGS) {
    return { ...state, songs: payload.songs };
  } else if (type === ACTIONS.GET_ARTISTS) {
    return { ...state, artists: payload.artists };
  } else if (type === ACTIONS.GET_ALBUMS) {
    return { ...state, albums: payload.albums };
  } else if (type === ACTIONS.GET_PLAYLISTS) {
    return { ...state, playlists: payload.playlists };
  } else if (type === ACTIONS.GET_CATEGORIES) {
    return { ...state, categories: payload.categories };
  } else {
    return state;
  }
};

export default spotifyApiDataReducer;
