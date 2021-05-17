// libs
import React from "react";

// mocks
import Header from "../../../../mocks/Header";

// others
import "./styles.scss";
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

const MenuTop = () => (
  <>
    {Header.HeaderList.map(({ id, name }) => {
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
  </>
);
export default MenuTop;
