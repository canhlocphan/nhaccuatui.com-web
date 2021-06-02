// libs
import React, { useContext } from "react";
import styled from "styled-components";
// hooks
import useRouter from "../../hooks/useRouter";
// context
import { DrawerContext } from "../../context";
// others
import "./styles.scss";
import { RightOutlined } from "@ant-design/icons";

const TitleColor = styled.div`
  color: ${(props) => props.color};
`;

const TitleBoxKey = ({ nameTitle }) => {
  const { defaultThemeColor } = useContext(DrawerContext);
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };

  return (
    <TitleColor className="title-box-key" color={defaultThemeColor}>
      <div className="title" title={nameTitle} onClick={handleChangePage}>
        <div className="title-name">{nameTitle} </div>
        <RightOutlined className="icon-title-box-key" />
      </div>
    </TitleColor>
  );
};

export default TitleBoxKey;
