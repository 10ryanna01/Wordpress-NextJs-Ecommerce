import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles["FSC__header"]}>
      <h1 className={styles["FSC__header__title"]}>Skill Tree Collectables</h1>
      <FaShoppingCart />
    </div>
  );
}
