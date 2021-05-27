// libs
import React from "react";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const MainArtitsInfo = ({ artist }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="main-artist-info">
      <div className="title">Top Nghệ Sĩ Trending Trong Tuần</div>
      <div className="artist-name" onClick={handleChangePage}>
        {artist}
      </div>
    </div>
  );
};

export default MainArtitsInfo;
