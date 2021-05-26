// libs
import React from "react";
// components
import TopHundredHead from "../TopHundredHead";
import BoxContentHundred from "../BoxContentHundred";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const TopHundred = ({ topHundred }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="top-hundred-wrapper">
      <TopHundredHead />
      <BoxContentHundred home={topHundred} />
      <div className="all" onClick={handleChangePage}>
        <span>Xem tất cả TOP 100</span>
      </div>
    </div>
  );
};

export default TopHundred;
