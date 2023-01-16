import React from "react";
import { Link } from "react-router-dom"
import { HomeIcon } from "../../../assets/icons/svg/HomeIcon";
import { ProfileIcon } from "../../../assets/icons/svg/ProfileIcon";
import { ChatIcon } from "../../../assets/icons/svg/ChatIcon";
import { ToolsIcon } from "../../../assets/icons/svg/ToolsIcon";
import { ROUTES } from "../../../utils/constants/routes";
import styles from "./Menu.module.scss";


export const Menu = () => {

  return (
    <div className={styles.menu_wrapper}>
      <div className={styles.menu}>
        <div className={styles.menu_header}>
          <div className={`${styles.menu_button} ${styles.menu_button_home}`}>
            <HomeIcon />
          </div>
          <Link to={ROUTES.AUTH} className={`${styles.menu_button} {styles.menu_button_profile}`}>
              <ProfileIcon />
          </Link>
          <div className={styles.menu_page_title}>Джерела України</div>
          <div className={`${styles.menu_button} {styles.menu_button_chat}`}>
            <ChatIcon />
          </div>
          <div className={`${styles.menu_button} {styles.menu_button_tools}`} >
            <ToolsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
