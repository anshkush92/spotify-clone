import { useState } from "react";

import PlayPauseContext from "../context/PlayPause";

const PlayPauseProvider = ({ children }) => {
  // Create a state for the play/pause button
  const [isPlaying, setIsPlaying] = useState(false);

  // Create a function to toggle the play/pause button
  const togglePlaying = () => {
    console.log(isPlaying ? "Pause" : "Play");
    setIsPlaying((previousState) => !previousState);
  };

  // value = {{}} reprsent the the states that we wanna share
  // Using the context provider to share the states to the children
  return (
    <PlayPauseContext.Provider value={{ isPlaying, togglePlaying }}>
      {children}
    </PlayPauseContext.Provider>
  );
};

export default PlayPauseProvider;
