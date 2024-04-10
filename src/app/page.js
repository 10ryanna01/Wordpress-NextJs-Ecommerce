"use client";
import React, { useState } from "react";

import Image from "next/image";
import Header from "./components/Header";

import styles from "@styles/page.module.scss";

import gstyles from "@styles/index.scss";

import products from "@data/products.json";
import Results from "./components/Results";
import { FaChevronRight } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { SiAtom } from "react-icons/si";
import { GiReactor } from "react-icons/gi";
import { FaReact } from "react-icons/fa";

import { GiFalloutShelter } from "react-icons/gi";

import { SiTemporal } from "react-icons/si";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
export default function Home() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="FSC">
      <div data-theme={isDark ? "dark" : "light"}>
        <Header />

        <main className={styles.main}>
          <ToggleTheme
            handleChange={() => setIsDark(!isDark)}
            isChecked={isDark}
          />
          <Results />
          <div className="FSC__product-grid">
            {products.map((product, _idx) => {
              return (
                <div key={product.id} className="FSC__card">
                  <div className="cb">
                    <h3 className="FSC__card__title">{product.title}</h3>
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="FSC__card__img"
                      // height width set to intrinsic image values
                      width={520}
                      height={706}
                      sizes="360px"
                      priority
                    />
                    <p className="FSC__card__desc"> {product.description}</p>
                    <p className="FSC__card__price">${product.price}</p>
                    <button
                      type="button"
                      className=" snipcart-add-item  FSC__buttons__secondary"
                      data-item-id={product.id}
                      data-item-price={product.price}
                      data-item-description={product.description}
                      data-item-image={product.image}
                      data-item-name={product.title}
                    >
                      <div className="FSC__buttons__secondary__top">
                        <SiTemporal className="FSC__utility__spin" /> add to
                        cart{" "}
                      </div>
                      <div className="FSC__buttons__secondary__bottom"></div>
                      <div className="FSC__buttons__secondary__base"></div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
        </main>
      </div>
    </div>
  );
}
