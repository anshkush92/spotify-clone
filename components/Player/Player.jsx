import React from "react";

import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiFillStepForward,
  AiFillStepBackward,
} from "react-icons/ai";
import { BsPip, BsShuffle, BsArrowRepeat } from "react-icons/bs";
import { TbMicrophone2, TbDevices2 } from "react-icons/tb";
import {
  HiSpeakerWave,
  HiSpeakerXMark,
  HiOutlineQueueList,
} from "react-icons/hi2";
import ProgressBar from "./ProgressBar";

/* eslint-disable @next/next/no-img-element */
const Player = () => {
  return (
    <div className="relative mt-20">
      <div className="fixed inset-x-0 bottom-0 bg-[#181818] h-20 w-full z-[60] text-gray-300">
        <div className="flex flex-row items-center justify-between  w-full h-full px-4">
          <div className="flex gap-x-3 items-center">
            <img
              src="https://res.cloudinary.com/dicbnntfh/image/upload/v1670681049/spotify-clone/playlistCover_jestk7.jpg"
              alt="Song"
              height={50}
              width={50}
            ></img>
            <div className="flex flex-col">
              <span className="text-white">Lorem Ipsum Dialog Hello</span>
              <span className="text-sm text-gray-400">Artist Name</span>
            </div>
            <div className="flex flex-row gap-x-3">
              <AiOutlineHeart className="player-icons"></AiOutlineHeart>
              <AiFillHeart className="player-icons"></AiFillHeart>
              <BsPip className="player-icons"></BsPip>
            </div>
          </div>

          <div className="flex flex-col gap-y-1.5 items-center">
            <div className="flex flex-row gap-x-3 text-lg items-center justify-start">
              <BsShuffle className="hover:text-[#1db954] player-icons"></BsShuffle>
              <AiFillStepBackward className="player-icons"></AiFillStepBackward>
              <AiFillPlayCircle className="player-icons-play-pause"></AiFillPlayCircle>
              <AiFillPauseCircle className="player-icons-play-pause"></AiFillPauseCircle>
              <AiFillStepForward className="player-icons"></AiFillStepForward>
              <BsArrowRepeat className="hover:text-[#1db954]"></BsArrowRepeat>
            </div>
            <div className="w-[30rem] h-[0.3rem] flex items-center gap-x-2 text-sm">
              <span>0:29</span>
              <ProgressBar></ProgressBar>
              <span>0:39</span>
            </div>
          </div>

          <div className="flex flex-row gap-x-2 items-center">
            <div className="flex flex-row items-center gap-x-3">
              <TbMicrophone2 className="player-icons"></TbMicrophone2>
              <HiOutlineQueueList className="player-icons"></HiOutlineQueueList>
              <TbDevices2 className="player-icons"></TbDevices2>
              <HiSpeakerWave className="player-icons"></HiSpeakerWave>
              <HiSpeakerXMark className="player-icons"></HiSpeakerXMark>
            </div>
            <div className="w-20 h-[0.3rem]">
              <ProgressBar></ProgressBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
