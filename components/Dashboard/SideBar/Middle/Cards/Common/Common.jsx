import React from "react";

import convertTime from "../../../../../../utils/convertTime";

/* eslint-disable @next/next/no-img-element */

const Common = ({ data, children, type }) => {
  let typeTracks, typePlaylists;

  if (type === "tracks") {
    // Mapping of the data for the Tracks / Songs Sections
    typeTracks = data.map(
      ({ id, previewUrl, album, image, name, artist, duration }) => (
        <a key={id} href={previewUrl} target="_blank" rel="noreferrer">
          <div className="card-container">
            <div>
              <img
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
              ></img>
            </div>

            <div className="card-desc-container">
              <div className="w-[calc(100%)] truncate font-bold">{name}</div>
              <div className="w-[calc(100%)] truncate text-[#85E164]">
                {artist}
              </div>
              <div>Duration : {convertTime(duration)}</div>
            </div>
          </div>
        </a>
      )
    );
  } else if (type === "playlists") {
    // Mapping of the data for the Playlists Section
    typePlaylists = data.map(({ id, owner, image, name, tracks, uri }) => (
      <a key={id} href={uri} target="_blank" rel="noreferrer">
        <div key={id} className="card-container">
          <div>
            <img
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
            ></img>
          </div>

          <div className="card-desc-container">
            <div className="w-[calc(100%)] truncate font-bold">{name}</div>
            <div className="w-[calc(100%)] truncate">
              By <span className="text-[#85E164]">{owner}</span>
            </div>
            <div>Tracks : {tracks}</div>
          </div>
        </div>
      </a>
    ));
  }

  return (
    <>
      <p className="card-title">{children}</p>
      <div className="grid-container">
        {type === "tracks" ? typeTracks : typePlaylists}
      </div>
    </>
  );
};

export default Common;
