import { useContext } from "react";

import SpotifyApiData from "../../../../../../context/SpotifyApiData";

/* eslint-disable @next/next/no-img-element */
const Artist = () => {
  const { state } = useContext(SpotifyApiData);
  const { artists } = state;

  return (
    <>
      <p className="card-title">Artists</p>
      <div className="grid-container">
        {artists.map(({ id, name, image, followers, artistProfile }) => (
          <a
            key={id}
            href={artistProfile}
            target="_blank"
            rel="noreferrer"
            className={image ? "" : "hidden"}
          >
            <div key={id} className={`${image ? "card-container" : "hidden"}`}>
              <img
                src={image}
                width={150}
                height={150}
                style={{
                  borderRadius: "100%",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                alt={name}
              ></img>
              <div className="card-desc-container">
                <div className="w-[calc(100%)] truncate font-bold">{name}</div>
                <div>Followers : {followers}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Artist;
