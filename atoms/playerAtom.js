import { atom } from "recoil";

// const [play, setPlay] = useState(false); ----> This code is replaced by the Recoil code below
export const playState = atom({
  // Must be unique, because we use this key to identify the atom
  key: "playState",
  default: false,
});

// const [playingTrack, setPlayingTrack] = useState(""); ----> This code is replaced by the Recoil code below
export const playingTrackState = atom({
  key: "playingTrackState",
  default: "",
});

export const chooseTrack = atom({
  key: "chooseTrack",
  default: "",
});
