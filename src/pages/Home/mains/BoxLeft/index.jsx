// libs
import React from "react";
// compoents
import SlideDefault from "../../components/SlideDefault";
import ListeningWhatToday from "../../components/ListeningWhatToday";
import AlbumHot from "../../components/AlbumHot";
import MvHot from "../../components/MvHot";
import ListSong from "../../components/ListSong";
import Karaoke from "../../components/Karaoke";
import Entertainment from "../../components/Entertainment";
// others
import "./styles.scss";

const BoxLeft = ({ Home }) => (
  <div className="box-left-wrapper">
    <SlideDefault slideDefault={Home.slideDefault} />
    <ListeningWhatToday listeningWhatToday={Home.listeningWhatToday} />
    <AlbumHot albumHot={Home.albumHot} />
    <MvHot mvHot={Home.mvHot} />
    <ListSong listSong={Home.song} />
    <Karaoke karaoke={Home.karaoke} />
    <Entertainment entertainment={Home.entertainment} />
  </div>
);

export default BoxLeft;
