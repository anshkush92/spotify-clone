import { useContext } from "react";

import SpotifyApiData from "../../../../../../context/SpotifyApiData";

import Image from "next/image";

const Browse = () => {
  const { state } = useContext(SpotifyApiData);
  const { categories } = state;

  return (
    <>
      <p className="card-title">Browse Genres</p>
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
              alt={name}
            ></Image>
            <div className="text-2xl font-[600]">{name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Browse;
