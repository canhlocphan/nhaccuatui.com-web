// libs
import React from "react";

// compoents
import AlbumHot from "../../components/AlbumHot";
import Entertainment from "../../components/Entertainment";
import Karaoke from "../../components/Karaoke";
import ListeningWhatToday from "../../components/ListeningWhatToday";
import ListSong from "../../components/ListSong";
import MvHot from "../../components/MvHot";
import SlideDefault from "../../components/SlideDefault";

// others
import "./styles.scss";

const BoxLeft = () => (
  <div className="box-left">
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
