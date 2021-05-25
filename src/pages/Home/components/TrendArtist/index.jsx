// libs
import React, { useEffect, useState } from "react";
// components
import MainTrendArtist from "../MainTrendArtist";
import TrendArtistSlide from "../TrendArtistSlide";
// others
import "./styles.scss";

const TrendArtist = ({ trendArtist }) => {
  const [imageDefault, setImageDefault] = useState(trendArtist[0].image);
  const [artist, setArtist] = useState(trendArtist[0].artist);
  const [id, setId] = useState(1);
  useEffect(() => {
    const time = setInterval(() => {
      if (parseInt(id, 10) === 5) {
        setId(1);
      } else setId(parseInt(id, 10) + 1);
      setImageDefault(trendArtist[id - 1].image);
      setArtist(trendArtist[id - 1].artist);
    }, 5000);
    return () => clearInterval(time);
  });
  return (
    <div className="trend-artist-wrapper">
      <div className="trend-gallery">
        <MainTrendArtist image={imageDefault} artist={artist} />
        <TrendArtistSlide
          trendArtist={trendArtist}
          setId={setId}
          setImageDefault={setImageDefault}
          imageDefault={imageDefault}
          setArtist={setArtist}
        />
      </div>
    </div>
  );
};

export default TrendArtist;
