// libs
import React, { useEffect } from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import ListeningWhatTodayAlbumList from "../ListeningWhatTodayAlbumList";
import PaginationWrapper from "../PaginationWrapper";
// hooks
import usePaginationKey from "../../../../hooks/usePaginationKey";
import useHover from "../../../../hooks/useHover";
// others
import "./styles.scss";

const ListeningWhatToday = ({ listeningWhatToday, nameTitle, page, setPage, totalPages }) => {
  const [hoverRef, isHovered] = useHover();
  const currentPage = usePaginationKey(page, setPage, totalPages, isHovered);
  useEffect(() => {
    if (isHovered) {
      setPage(currentPage);
    }
  }, [isHovered, currentPage, setPage]);
  return (
    <div className="listening-what-today-wrapper" ref={hoverRef}>
      <div className="listening-what-today">
        <TitleBoxKey nameTitle={nameTitle} />
        <ListeningWhatTodayAlbumList listeningWhatToday={listeningWhatToday} />
        <PaginationWrapper page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default ListeningWhatToday;
