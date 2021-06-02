// libs
import React from "react";
// hooks
import useRouter from "../../hooks/useRouter";
// others
import "./styles.scss";

const HeaderLogo = () => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/");
  };
  return <li className="logo" onClick={handleChangePage}></li>;
};
export default HeaderLogo;
