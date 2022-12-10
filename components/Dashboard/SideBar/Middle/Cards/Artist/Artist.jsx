import React from "react";
import Image from "next/image";

const test = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const Artist = () => {
  return (
    <div className="grid-container">
      {test.map((item, index) => (
        <div key={index} className="card-container">
          <Image
            src="https://res.cloudinary.com/dicbnntfh/image/upload/v1670671747/spotify-clone/shakira_m8zdt9.webp"
            width={150}
            height={150}
            style={{
              borderRadius: "100%",
              objectFit: "contain",
              width: "100%",
            }}
            alt="Playlist Cover"
          ></Image>
          <div className="flex flex-col justify-center items-start">
            <div className="w-[calc(100%)] truncate">Shakira</div>
            <div>Artist</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artist;
