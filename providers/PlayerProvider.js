import { useState } from "react";

import Player from "../context/Player";

const PlayerProvider = ({ children }) => {
  // Create a state for the play/pause button
  const [isPlaying, setIsPlaying] = useState(false);

  // State for the liked songs
  const [isLiked, setIsLiked] = useState(false);

  // State for the User Profile Drop Down
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // State for the muting the volume
  const [isMute, setIsMute] = useState(false);

  // Create a function to toggle the play/pause button
  const togglePlaying = () => {
    console.log(isPlaying ? "Pause" : "Play");
    setIsPlaying((previousState) => !previousState);
  };

  // Create a function to toggle the liked songs
  const toggleLiked = () => {
    console.log(isLiked ? "Unlike" : "Like");
    setIsLiked((previousState) => !previousState);
  };

  // Create a function to toggle the User Profile Drop Down
  const toggleProfileDropdown = () => {
    setIsProfileOpen((previousState) => !previousState);
  };

  // Create a function to toggle the muting the volume
  const toggleMute = () => {
    setIsMute((previousState) => !previousState);
  };

  // value = {{}} reprsent the the states that we wanna share
  // Using the context provider to share the states to the children
  return (
    <Player.Provider
      value={{
        isPlaying,
        isLiked,
        isProfileOpen,
        isMute,
        togglePlaying,
        toggleLiked,
        toggleProfileDropdown,
        toggleMute,
      }}
    >
      {children}
    </Player.Provider>
  );
};

export default PlayerProvider;
