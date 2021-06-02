// libs
import React from "react";
// hooks
import useRouter from "../../hooks/useRouter";
// others
import "./styles.scss";

const HeaderNewVersion = () => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/");
  };
  return (
    <li className="new-version" onClick={handleChangePage}>
      <div rel="noreferrer">
        <img src="https://stc-id.nixcdn.com/v11/images/ic_new.png" alt="#phienbanmoi"></img>
      </div>
    </li>
  );
};
export default HeaderNewVersion;
