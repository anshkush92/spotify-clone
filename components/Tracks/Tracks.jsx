import React from "react";

/* eslint-disable @next/next/no-img-element */

const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Tracks = ({ data }) => {
  return (
    <div className="text-white w-full">
      <span className="card-title ">Songs</span>

      <div className="flex flex-col">
        <div className="w-full grid grid-cols-10 items-center content-center gap-x-10 p-1">
          <div className="font-bold">#</div>
          <div className="col-span-5 font-bold">Title</div>
          <div className="col-span-3 font-bold">Released Date</div>
          <div className="font-bold">Total Tracks</div>
        </div>

        <div className="col-span-4 mb-1">
          <hr className="divider"></hr>
        </div>

        {data.map(
          (
            { name, image, artistName, totalTracks, uri, releaseDate },
            index
          ) => {
            return (
              <a key={index} href={uri} target="_blank" rel="noreferrer">
                <div key={index} className="track group">
                  <div className="">{index + 1}</div>

                  <div className=" col-span-5">
                    <div className="flex flex-row gap-x-5 grow">
                      <img src={image} alt={name} className="w-12 h-12"></img>
                      <div className="flex flex-col items-start justify-center">
                        <span className="">{name}</span>
                        <span className="text-sm text-[#636567] group-hover:text-white">
                          {artistName}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" col-span-3">{releaseDate}</div>
                  <div className="">{totalTracks}</div>
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
