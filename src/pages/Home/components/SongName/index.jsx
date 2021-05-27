// libs
import React from "react";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const SongName = ({ songName }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="name-song" onClick={handleChangePage}>
      {songName}
    </div>
  );
};

export default SongName;
