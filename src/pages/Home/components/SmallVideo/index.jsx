// libs
import React from "react";
// components
import SmallBoxAbsolute from "../SmallBoxAbsolute";
import SongName from "../SongName";
import NameSingerList from "../NameSingerList";
// others
import "./styles.scss";

const SmallVideoList = (props) => (
  <li className="video-small" key={props.id} title={props.title}>
    <SmallBoxAbsolute image={props.image} view={props.view} time={props.time}></SmallBoxAbsolute>
    <SongName songName={props.songName}></SongName>
    <NameSingerList title={props.title}></NameSingerList>
  </li>
);

export default SmallVideoList;
