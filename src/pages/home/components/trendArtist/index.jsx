// libs
import React, { useEffect, useState } from "react";

// components
import MainTrendArtist from "../MainTrendArtist";
import TrendArtistSlide from "../TrendArtistSlide";

// mocks
import Home from "../../../../mocks/Home";

// scss
import "./styles.scss";

const TrendArtist = () => {
  const [imageDefault, setImageDefault] = useState(Home.trendArtist[0].image);
  const [artist, setArtist] = useState(Home.trendArtist[0].artist);
  const [id, setId] = useState(1);
  useEffect(() => {
    const time = setInterval(() => {
      if (parseInt(id, 10) === 5) {
        setId(1);
      } else setId(parseInt(id, 10) + 1);
      setImageDefault(Home.trendArtist[id - 1].image);
      setArtist(Home.trendArtist[id - 1].artist);
    }, 5000);
    return () => clearInterval(time);
  });
  return (
    <div className="trend-artist">
      <div className="trend-gallery">
        <MainTrendArtist image={imageDefault} artist={artist}></MainTrendArtist>
        <TrendArtistSlide
          trendArtist={Home.trendArtist}
          setId={setId}
          setImageDefault={setImageDefault}
          imageDefault={imageDefault}
          setArtist={setArtist}
        ></TrendArtistSlide>
      </div>
    </div>
  );
};

export default TrendArtist;
