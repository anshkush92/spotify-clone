import { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const PlayPause = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div
      className="h-12 w-12 bg-[#85E164] rounded-full flex items-center justify-center  transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#8ef16b]"
      onClick={() => setIsPlaying((previousState) => !previousState)}
    >
      {isPlaying ? (
        <BsPauseFill size={25} className="ml-[2px]"></BsPauseFill>
      ) : (
        <BsFillPlayFill size={25}></BsFillPlayFill>
      )}
    </div>
  );
};

export default PlayPause;
