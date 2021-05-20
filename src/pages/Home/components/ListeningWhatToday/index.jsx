import React from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import ListeningWhatTodayAlbumList from "../ListeningWhatTodayAlbumList";
// others
import "./styles.scss";

const ListeningWhatToday = ({ listeningWhatToday, nameTitle }) => (
  <div className="listening-what-today-wrapper">
    <div className="listening-what-today">
      <TitleBoxKey nameTitle={nameTitle} />
      <ListeningWhatTodayAlbumList listeningWhatToday={listeningWhatToday} />
    </div>
  </div>
);

export default ListeningWhatToday;
