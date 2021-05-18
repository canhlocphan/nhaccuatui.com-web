// libs
import React from "react";
// others
import "./styles.scss";

const TrendArtistSlide = ({ trendArtist, imageDefault, setId, setImageDefault, setArtist }) => (
  <ul className="trend-artist-slide">
    {trendArtist.map(({ id, image, artist }) => (
      <div key={id} className="small-image">
        <img
          className={`${imageDefault === image ? "active" : "none"}`}
          src={image}
          alt="smallImage"
          onMouseEnter={() => {
            setId(id);
            setImageDefault(image);
            setArtist(artist);
          }}
        ></img>
      </div>
    ))}
  </ul>
);

export default TrendArtistSlide;
