// libs
import React from "react";

// components
import SuggestionForYou from "../SuggestionForYou";
import ButtonPlaylist from "../ButtonPlaylist";

// others
import "./styles.scss";

const DiscoveryPlayList = () => (
  <div className="discovery-playlist">
    <div className="background">
      <SuggestionForYou></SuggestionForYou>
      <ButtonPlaylist></ButtonPlaylist>
    </div>
  </div>
);

export default DiscoveryPlayList;
