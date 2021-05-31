// libs
import React from "react";
import styled from "styled-components";
// others
import "./styles.scss";
import { CloseOutlined, SettingOutlined } from "@ant-design/icons";

const ButtonDrawerWrapper = styled.div`
  background: ${(props) => props.color};
`;

const ButtonDrawer = ({ onSetting, handleChangeSetting, defaultThemeColor }) => (
  <ButtonDrawerWrapper className="btn-drawer-wrapper" color={defaultThemeColor} onClick={handleChangeSetting}>
    {onSetting ? <CloseOutlined className="btn-drawer" /> : <SettingOutlined className="btn-drawer" />}
  </ButtonDrawerWrapper>
);

export default ButtonDrawer;
