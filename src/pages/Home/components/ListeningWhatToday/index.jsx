// libs
import React, { useEffect, useState } from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import ListeningWhatTodayAlbumList from "../ListeningWhatTodayAlbumList";
import PaginationWrapper from "../PaginationWrapper";
// hooks
import usePressKey from "../../../../hooks/usePressKey";
// others
import "./styles.scss";

const ListeningWhatToday = ({ listeningWhatToday, nameTitle, page, setPage }) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const currentPage = usePressKey(page, setPage, isHover);
  useEffect(() => {
    if (isHover) {
      setPage(currentPage);
    }
  }, [isHover, currentPage, setPage]);
  return (
    <div className="listening-what-today-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="listening-what-today">
        <TitleBoxKey nameTitle={nameTitle} />
        <ListeningWhatTodayAlbumList listeningWhatToday={listeningWhatToday} />
        <PaginationWrapper page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default ListeningWhatToday;
