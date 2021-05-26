// libs
import React from "react";
// components
import LogoTopHundred from "../LogoTopHundred";
import BoxTitleHundred from "../BoxTitleHundred";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const TopHundredHead = () => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="top-hundred-head" onClick={handleChangePage}>
      <LogoTopHundred />
      <BoxTitleHundred />
    </div>
  );
};

export default TopHundredHead;
