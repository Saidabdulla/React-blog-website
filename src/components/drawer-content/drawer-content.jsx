import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./drawer-content.module.css";

const DrawerContent = () => {
  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About me</NavLink>
        </li>
        <li>
          <NavLink to="categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DrawerContent;
