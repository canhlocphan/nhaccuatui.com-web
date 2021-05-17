// libs
import React from "react";

// others
import "./styles.scss";

const SearchBox = () => (
  <li className="search">
    <form className="form-search">
      {/* <div className="glass-search-icon"></div> */}
      <input placeholder="Tìm bài hát, video, playlist, ca sĩ"></input>
    </form>
  </li>
);
export default SearchBox;
