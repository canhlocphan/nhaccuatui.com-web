import React from "react";

import "./styles.scss";

import HeaderMenuList from "../../../../constants/header/HeaderMenuList";
// import MenuDropdown from "./menuDropDown"

import { Dropdown, Menu } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const ActionBox = () => (
  <ul className="action-box">
    <li className="logo"></li>
    <li>
      <a href="/" rel="noreferrer">
        <img
          src="https://stc-id.nixcdn.com/v11/images/ic_new.png"
          alt="#phienbanmoi"
          style={{ paddingTop: "3px" }}
        ></img>
      </a>
    </li>
    {HeaderMenuList.map(({ id, name }) => {
      if (name === "Khác")
        return (
          <Dropdown key={id} overlay={menu} placement="bottomRight">
            <li className="more"></li>
          </Dropdown>
        );
      return (
        <Dropdown key={id} overlay={menu} placement="bottomLeft">
          <li key={id} style={{ paddingTop: "3px" }}>
            {name}
          </li>
        </Dropdown>
      );
    })}
    <li className="user-login">
      <div className="user-login-wrapper">
        <div className="user-login-avt">
          <img className="avt" src="https://stc-id.nixcdn.com/v11/images/avatar_default_2020.png" alt="avt"></img>
        </div>
        <div className="vip">
          <p className="txt-vip">Mua VIP</p>
        </div>
      </div>
    </li>
    <li className="function">
      <div className="function-listen">
        <img src="https://stc-id.nixcdn.com/v11/images/header_new/ic_head_new.png" alt="listen"></img>
      </div>
      <div className="function-upload">
        <img src="https://stc-id.nixcdn.com/v11/images/header_new/ic_upload_new.png" alt="upload"></img>
      </div>
    </li>
    <li className="search">
      <form className="form-search">
        {/* <div className="glass-search-icon"></div> */}
        <input placeholder="Tìm bài hát, video, playlist, ca sĩ"></input>
      </form>
    </li>
  </ul>
);
export default ActionBox;
