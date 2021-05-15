// libs
import React from "react";

// scss
import "./styles.scss";

const TrendArtistSlide = (props) => (
  <ul className="trend-artist-slide">
    {props.trendArtist.map(({ id, image, artist }) => (
      <div key={id} className="small-image">
        <img
          className={`${props.imageDefault === image ? "active" : "none"}`}
          src={image}
          alt="smallImage"
          onMouseEnter={() => {
            props.setId(id);
            props.setImageDefault(image);
            props.setArtist(artist);
          }}
        ></img>
      </div>
    ))}
  </ul>
);

export default TrendArtistSlide;
