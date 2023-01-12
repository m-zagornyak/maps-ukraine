import React from "react";
import { HomeIcon } from "./elements/HomeIcon";
import { ProfileIcon } from "./elements/ProfileIcon";
import styles from "./Menu.module.scss";
import { ChatIcon } from "./elements/ChatIcon";
import { ToolsIcon } from "./elements/ToolsIcon";

export const Menu = () => {
  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.menu}>
        <div className={styles.menu_header}>
          <div className={`${styles.menu_button} ${styles.menu_button_home}`}>
            <HomeIcon />
          </div>
          <div className={`${styles.menu_button} {styles.menu_button_profile}`}>
            <ProfileIcon />
          </div>
          <div className={styles.menu_page_title}>
            Джерела України 
          </div>
          <div className={`${styles.menu_button} {styles.menu_button_chat}`}>
            <ChatIcon />
          </div>
          <div className={`${styles.menu_button} {styles.menu_button_tools}`}>
            <ToolsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
