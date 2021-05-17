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

const BoxLeft = () => (
  <div className="box-left-wrapper">
    <SlideDefault />
    <ListeningWhatToday />
    <AlbumHot />
    <MvHot />
    <ListSong />
    <Karaoke />
    <Entertainment />
  </div>
);

export default BoxLeft;
