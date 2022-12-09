import Image from "next/image";
import React from "react";

import Desktop from "./Navigation/Desktop";
import Playlist from "./Playlist/Playlist";
import InstallApp from "./Install/InstallApp";

import { AiFillHome, AiOutlineSearch, AiTwotoneHeart } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";

const Left = () => {
  return (
    <section className="w-56 fixed z-40 bg-black/100 text-[#7D7D7D] h-screen top-0 flex flex-col px-4 gap-y-4 sm:flex-shrink">
      <div className="flex flex-row items-center w-fit cursor-pointer justify-start h-20 -ml-2.5 pt-4 gap-x-2">
        <Image
          src="https://res.cloudinary.com/dicbnntfh/image/upload/v1670563310/spotify-clone/spotify_s1tqqq.png"
          width={56}
          height={56}
          alt="Spotify Logo White"
        ></Image>
        <span className="text-2xl text-white">Spotify</span>
      </div>

      <Desktop icon={<AiFillHome></AiFillHome>}>Home</Desktop>
      <Desktop icon={<AiOutlineSearch></AiOutlineSearch>}>Search</Desktop>
      <Desktop icon={<BiLibrary></BiLibrary>}>Your Library</Desktop>

      <hr className="bg-[#7d7d7d] border-transparent"></hr>

      <Desktop icon={<MdAddBox></MdAddBox>}>Create Playlist</Desktop>
      <Desktop icon={<AiTwotoneHeart></AiTwotoneHeart>}>Liked Songs</Desktop>

      <hr className="bg-[#7d7d7d] border-transparent"></hr>

      <Playlist></Playlist>
      <InstallApp></InstallApp>
    </section>
  );
};

export default Left;
