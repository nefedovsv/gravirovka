import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../content/image/logo.bmp";
import vk from "../content/image/vk.png";
import instagram from "../content/image/instagram.png";
export const Header: React.FC = () => {
  return (
    <div className={styles.box}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ fontSize: "20px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/gallery">Gallery</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/booking">Booking</Link>
        </Menu.Item>
      </Menu>
      <div>
        <span className={styles.text}>
          <Icon type="share-alt" /> follow us
        </span>
        <a href="https://www.instagram.com/gravirovkaryazan/">
          <img className={styles.social} src={instagram} alt="instagram" />
        </a>
        <a href="https://vk.com/gravirovka_ryazan">
          <img className={styles.social} src={vk} alt="instagram" />
        </a>
      </div>
    </div>
  );
};
