// libs
import React from "react";
// components
import SuggestionForYou from "../SuggestionForYou";
import ButtonPlaylist from "../ButtonPlaylist";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const DiscoveryPlayList = () => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="discovery-playlist-wrapper" onClick={handleChangePage}>
      <div className="discovery-playlist">
        <SuggestionForYou />
        <ButtonPlaylist />
      </div>
    </div>
  );
};

export default DiscoveryPlayList;
