// libs
import React from "react";
// components
import SuggestionForYou from "../SuggestionForYou";
import ButtonPlaylist from "../ButtonPlaylist";
// others
import "./styles.scss";

const DiscoveryPlayList = () => (
  <div className="discovery-playlist-wrapper">
    <div className="discovery-playlist">
      <SuggestionForYou />
      <ButtonPlaylist />
    </div>
  </div>
);

export default DiscoveryPlayList;
