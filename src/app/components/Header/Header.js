import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Script from "next/script";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div>
      <div className={styles["FSC__header"]}>
        <h1 className={styles["FSC__header__title"]}>
          Skill Tree Collectables
        </h1>

        <button className="snipcart-checkout  FSC__Buttons__primary">
          <FaShoppingCart />
          <span class="snipcart-total-price"></span>
        </button>
      </div>

      {/* //snipcart */}
    </div>
  );
}
