// libs
import React, { useContext } from "react";
// hooks
import useRouter from "../../hooks/useRouter";
// context
import { DrawerContext } from "../../context";
// others
import "./styles.scss";
import { RightOutlined } from "@ant-design/icons";

const TitleBoxKey = ({ nameTitle }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  const { defaultThemeColor } = useContext(DrawerContext);
  return (
    <h2 className="title-box-key" style={{ color: `${defaultThemeColor}` }}>
      <div className="title" title={nameTitle} onClick={handleChangePage}>
        <div className="title-name">{nameTitle} </div>
        <RightOutlined className="icon-title-box-key" />
      </div>
    </h2>
  );
};

export default TitleBoxKey;
