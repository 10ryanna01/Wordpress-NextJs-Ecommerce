"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <div className={styles["FSC__header"]}>
        <div className={styles["FSC__header__brand"]}>
          <h1 className={styles["FSC__header__brand__title"]}>
            Skill Tree Collectables
          </h1>
          <h2 className={styles["FSC__header__brand__subtitle"]}>
            a collection of stats cards from the Fallout series adapted from
            the&nbsp;
            <Link
              href="https://fallout.fandom.com/wiki/Fallout_Wiki"
              target="blank"
              className="FSC__link"
            >
              Fallout Wiki
            </Link>
          </h2>
        </div>

        {/* //snipcart */}
        <button type="button" className="FSC__buttons__primary">
          <div className="FSC__buttons__primary__top snipcart-checkout">
            <FaShoppingCart />
            <span className="snipcart-total-price"></span>
          </div>
          <div className="FSC__buttons__primary__bottom"></div>
          <div className="FSC__buttons__primary__base"></div>
        </button>
      </div>
    </>
  );
}
