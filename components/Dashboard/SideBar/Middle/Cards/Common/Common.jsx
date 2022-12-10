import React from "react";
import Image from "next/image";

const test = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const Common = () => {
  return (
    <div className="w-full text-white grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-7 h-100">
      {test.map((item, index) => (
        <div
          key={index}
          className="bg-[#202020] hover:bg-[#282828] cursor-pointer flex flex-col gap-y-2 p-4 rounded-md"
        >
          <Image
            src="https://res.cloudinary.com/dicbnntfh/image/upload/v1670662444/spotify-clone/playlist-cover_zusj7g.webp"
            width={150}
            height={150}
            style={{ borderRadius: "6px", objectFit: "contain", width: "100%" }}
            alt="Playlist Cover"
          ></Image>
          <div className="flex flex-col justify-center items-start">
            <div className="w-[calc(100%)] truncate">
              Playlist Name Playlist Name
            </div>
            <div>Playlist Descriptioin</div>
            <div>Author</div>
            <div>Date</div>
            <div>Total Time</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Common;
