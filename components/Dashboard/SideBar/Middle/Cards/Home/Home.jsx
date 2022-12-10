import Image from "next/image";
import React from "react";

const test = ["1", "2", "3", "4", "5", "6"];

const Home = () => {
  return (
    <div className="grid-container">
      {test.map((item, index) => (
        <div
          key={index}
          className="text-white bg-[#202020] flex flex-row col-span-2 items-center rounded-md justify-start gap-x-3 overflow-hidden hover:bg-[#282828] cursor-pointer"
        >
          <Image
            src="https://res.cloudinary.com/dicbnntfh/image/upload/v1670681049/spotify-clone/playlistCover_jestk7.jpg"
            width={75}
            height={75}
            alt="Playlist Cover"
          ></Image>
          <div className="font-[600] text-lg">Playlist Name</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
