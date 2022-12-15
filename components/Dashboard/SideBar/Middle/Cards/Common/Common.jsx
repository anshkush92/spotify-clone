import React from "react";
import Image from "next/image";

import convertTime from "../../../../../../utils/convertTime";

const Common = ({ data, children, type }) => {
  console.log(data);

  let typeTracks, typePlaylists;

  if (type === "tracks") {
    // Mapping of the data for the Tracks / Songs Sections
    typeTracks = data.map(
      ({ id, previewUrl, album, image, name, artist, duration }) => (
        <a key={id} href={previewUrl}>
          <div className="bg-[#202020] hover:bg-[#282828] cursor-pointer flex flex-col gap-y-2 p-4 rounded-md">
            <Image
              src={image}
              width={150}
              height={150}
              style={{
                borderRadius: "6px",
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              alt={album || name}
            ></Image>
            <div className="flex flex-col justify-center items-start">
              <div className="w-[calc(100%)] truncate">{name}</div>
              <div>{artist}</div>
              <div>Duration : {convertTime(duration)}</div>
            </div>
          </div>
        </a>
      )
    );
  } else if (type === "playlists") {
    // Mapping of the data for the Playlists Section
    typePlaylists = data.map(({ id, owner, image, name, tracks }) => (
      <div
        key={id}
        className="bg-[#202020] hover:bg-[#282828] cursor-pointer flex flex-col gap-y-2 p-4 rounded-md"
      >
        <Image
          src={image}
          width={150}
          height={150}
          style={{
            borderRadius: "6px",
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
          alt={name}
        ></Image>

        <div className="flex flex-col justify-center items-start">
          <div className="w-[calc(100%)] truncate">{name}</div>
          <div>By {owner}</div>
          <div>Tracks : {tracks}</div>
        </div>
      </div>
    ));
  }

  return (
    <>
      <p className="card-title">{children}</p>
      <div className="w-full text-white grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-7 h-100">
        {type === "tracks" ? typeTracks : typePlaylists}
      </div>
    </>
  );
};

export default Common;
