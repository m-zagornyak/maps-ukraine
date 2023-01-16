import React from "react";
import { Menu } from "../../components/Layout/Menu/Menu";
import { Map } from "../../components/Map/Map";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.home_page_container}>
      <Map />
      <Menu />
    </div>
  );
};
