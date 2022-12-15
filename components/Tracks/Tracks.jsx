import React from "react";

/* eslint-disable @next/next/no-img-element */

const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Tracks = () => {
  return (
    <div className="text-white w-full">
      <span className="card-title">Songs</span>

      <div className="w-full grid grid-cols-10 items-center content-center gap-x-10">
        <div className="">#</div>
        <div className="col-span-5 ">Title</div>
        <div className="col-span-3 ">Album</div>
        <div className="">Duration</div>
      </div>

      <div className="col-span-4">
        <hr className="divider"></hr>
      </div>

      {tests.map((test, index) => {
        return (
          <div
            key={index}
            className="w-full grid grid-cols-10 items-center content-center gap-x-10"
          >
            <div className="">{index + 1}</div>

            <div className=" col-span-5">
              <div className="flex flex-row gap-x-5 grow">
                <img
                  src="https://res.cloudinary.com/dicbnntfh/image/upload/v1670681049/spotify-clone/playlistCover_jestk7.jpg"
                  alt="Check"
                  className="w-10 h-10"
                ></img>
                <div className="flex flex-col items-start justify-center">
                  <span>Name</span>
                  <span>Artist</span>
                </div>
              </div>
            </div>

            <div className=" col-span-3">Album</div>
            <div className="">Duration</div>
          </div>
        );
      })}
    </div>
  );
};

export default Tracks;
