import React from "react";

// compoents
import AlbumHot from "../../components/albumHot";
import Entertainment from "../../components/entertainment";
import Karaoke from "../../components/karaoke";
import ListeningWhatToday from "../../components/listeningWhatToday";
import ListSong from "../../components/listSong";
import MvHot from "../../components/mvHot";
import SlideDefault from "../../components/slideDefault";

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
