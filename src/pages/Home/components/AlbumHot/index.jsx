// libs
import React, { useEffect } from "react";
// components
import TitleBoxKey from "../../../../components/TitleBoxKey";
import AlbumHotAlbumList from "../AlbumHotAlbumList";
import PaginationWrapper from "../PaginationWrapper";
// hooks
import useHover from "../../../../hooks/useHover";
import usePaginationKey from "../../../../hooks/usePaginationKey";
// others
import "./styles.scss";

const AlbumHot = ({ albumHot, nameTitle, page, setPage, totalPages }) => {
  const [hoverRef, isHovered] = useHover();
  const currentPage = usePaginationKey(page, setPage, totalPages, isHovered);
  useEffect(() => {
    if (isHovered) {
      setPage(currentPage);
    }
  }, [isHovered, currentPage, setPage]);
  return (
    <div className="album-hot-wrapper" ref={hoverRef}>
      <div className="album-hot">
        <TitleBoxKey nameTitle={nameTitle} />
        <AlbumHotAlbumList albumHot={albumHot} />
        <PaginationWrapper page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default AlbumHot;
