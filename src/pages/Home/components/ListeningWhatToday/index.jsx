import React from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import ListeningWhatTodayAlbumList from "../ListeningWhatTodayAlbumList";
// others
import "./styles.scss";

const ListeningWhatToday = ({ listeningWhatToday }) => (
  <div className="listening-what-today">
    <div className="listening-what-today-container">
      <TitleBoxKey nameTitle="Nghe gì hôm nay" />
      <ListeningWhatTodayAlbumList listeningWhatToday={listeningWhatToday} />
    </div>
  </div>
);

export default ListeningWhatToday;
