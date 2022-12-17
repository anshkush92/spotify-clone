import { createContext } from "react";
import { initialState } from "../reducers/SpotifyApiDataReducer";

// Context for the Spotify API Data
const SpotifyApiData = createContext(initialState);

export default SpotifyApiData;
