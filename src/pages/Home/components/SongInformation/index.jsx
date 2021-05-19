// libs
import React from "react";
// components
import NameSingerList from "../NameSingerList";
import SongName from "../SongName";
// others
import "./styles.scss";

const SongInformation = ({ title, songName }) => (
  <div className="info-song" title={title}>
    <SongName songName={songName} />
    <NameSingerList title={title} />
  </div>
);

export default SongInformation;
