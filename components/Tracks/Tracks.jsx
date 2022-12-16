import React from "react";

import convertTime from "../../utils/convertTime";
/* eslint-disable @next/next/no-img-element */

const Tracks = ({ data, children }) => {
  return (
    <div className="text-white w-full">
      <span className="card-title ">{children}</span>

      <div className="flex flex-col">
        <div className="w-full grid grid-cols-10 items-center content-center gap-x-10 p-1">
          <div className="font-bold">#</div>
          <div className="col-span-5 font-bold">Title</div>
          <div className="col-span-3 font-bold">Album</div>
          <div className="font-bold">Duration</div>
        </div>

        <div className="col-span-4 mb-2">
          <hr className="divider"></hr>
        </div>

        {data.map(
          ({ name, image, artist, album, previewUrl, duration }, index) => {
            return (
              <a key={index} href={previewUrl} target="_blank" rel="noreferrer">
                <div key={index} className="track group">
                  <div className="">{index + 1}</div>

                  <div className=" col-span-5">
                    <div className="flex flex-row gap-x-5 grow">
                      <img src={image} alt={name} className="w-12 h-12"></img>
                      <div className="flex flex-col items-start justify-center">
                        <span className="truncate">{name}</span>
                        <span className="text-sm text-[#636567] group-hover:text-[#8BEB6B] truncate">
                          {artist}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" col-span-3 truncate">{album}</div>
                  <div className="">{convertTime(duration)}</div>
                </div>
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Tracks;
