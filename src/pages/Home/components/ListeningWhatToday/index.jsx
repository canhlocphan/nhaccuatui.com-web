// libs
import React, { useEffect, useState } from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import ListeningWhatTodayAlbumList from "../ListeningWhatTodayAlbumList";
import ButtonControlPageWrapper from "../ButtonControlPageWrapper";
// others
import "./styles.scss";

const ListeningWhatToday = ({ listeningWhatToday, nameTitle, page, setPage }) => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (on === true) {
        if (e.key === "ArrowUp" || e.key === "PageUp") {
          if (page >= 3) {
            e.preventDefault();
            window.removeEventListener("keydown", () => e.preventDefault());
          } else {
            e.preventDefault();
            setPage(page + 1);
          }
        } else if (e.key === "ArrowDown" || e.key === "PageDown") {
          if (page <= 1) {
            e.preventDefault();
            window.removeEventListener("keydown", () => e.preventDefault());
          } else {
            e.preventDefault();
            setPage(page - 1);
          }
        } else window.removeEventListener("keydown", () => e.preventDefault());
      } else if (on === false) {
        window.removeEventListener("keydown", () => e.preventDefault());
      }
    });
    return () => window.removeEventListener("keydown", (e) => e.preventDefault());
  }, [on, setOn, page, setPage]);
  return (
    <div
      className="listening-what-today-wrapper"
      onMouseEnter={() => {
        setOn(true);
      }}
      onMouseLeave={() => {
        setOn(false);
      }}
    >
      <div className="listening-what-today">
        <TitleBoxKey nameTitle={nameTitle} />
        <ListeningWhatTodayAlbumList listeningWhatToday={listeningWhatToday} />
        <ButtonControlPageWrapper page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default ListeningWhatToday;
