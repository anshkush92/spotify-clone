import React from "react";

import Image from "next/image";
import Link from "next/link";

const test = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const Browse = ({ categories }) => {
  return (
    <div className="grid-container">
      {categories?.map(({ name, image }, index) => (
        <div
          key={index}
          className="text-white p-4 h-44 rounded-md bg-purple-400 relative overflow-hidden"
        >
          <Image
            src={image}
            width={100}
            height={100}
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              transform: "rotate(25deg) translate(18%,-2%)",
            }}
            alt="2022 Spotify Wrapped"
          ></Image>
          <div className="text-2xl font-[600]">{name}</div>
        </div>
      ))}
    </div>
  );
};

export default Browse;
