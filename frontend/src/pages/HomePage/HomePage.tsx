import React from "react";
import { Menu } from "../../components/Layout/Menu/Menu";
import { Maps } from "../../components/Maps/Maps";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.home_page_container}>
      <Maps />
      <Menu />
    </div>
  );
};
