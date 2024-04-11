"use client";
import React, { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import styles from "@styles/page.module.scss";

import gstyles from "@styles/index.scss";

import { FaChevronRight } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { SiAtom } from "react-icons/si";
import { GiReactor } from "react-icons/gi";
import { FaReact } from "react-icons/fa";

import { GiFalloutShelter } from "react-icons/gi";

import { SiTemporal } from "react-icons/si";
import ScreenFilter from "@/app/components/ScreenFilter";
import Header from "@/app/components/Header";
import ToggleTheme from "@/app/components/ToggleTheme";
import RootLayout from "./layout";

export const metadata = {
  title: "SKILL TREE COLLECTABLES",
  description:
    "A COLLECTION OF STATS CARDS FROM THE FALLOUT SERIES ADAPTED FROM THE FALLOUT WIKI",
};

export default function HomePage({ products }) {
  const [isDark, setIsDark] = useState(true);
  console.log();

  return (
    <div>
      <div className="FSC">
        <div className="FSC__theme" data-theme={isDark ? "dark" : "light"}>
          <ScreenFilter />
          <Header />
          <ToggleTheme
            handleChange={() => setIsDark(!isDark)}
            isChecked={isDark}
          />
          <main className="FSC__container">
            <div className="FSC__filters">
              <button className="FSC__buttons__filter">
                <span className="FSC__buttons__filter__copy">intelegence</span>
              </button>
              <button className="FSC__buttons__filter">
                <span className="FSC__buttons__filter__copy">strength</span>
              </button>
              <button className="FSC__buttons__filter">
                <span className="FSC__buttons__filter__copy">charisma</span>
              </button>
              <button className="FSC__buttons__filter">
                <span className="FSC__buttons__filter__copy">all</span>
              </button>
            </div>
            <div className="FSC__product-grid">
              {products.map((product) => {
                const { featuredImage } = product;
                return (
                  <div key={product.id} className="FSC__card">
                    <div className="cb">
                      <h3 className="FSC__card__title">{product.title}</h3>
                      <Image
                        src={featuredImage.sourceUrl}
                        alt={featuredImage.altText}
                        className="FSC__card__img"
                        // height width set to intrinsic image values
                        width={featuredImage.mediaDetails.width}
                        height={featuredImage.mediaDetails.height}
                        sizes="360px"
                        priority
                      />
                      <p className="FSC__card__desc"> {product.description}</p>
                      <p className="FSC__card__price">
                        ${product.productPrice}
                      </p>
                      <button
                        type="button"
                        className=" snipcart-add-item  FSC__buttons__secondary"
                        data-item-id={product.productId}
                        data-item-price={product.productPrice}
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
          </main>
        </div>
      </div>
    </div>
  );
}
// product data

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://insightsurfer.net/website_99e336d3/graphql",
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query: gql`
      query AllProducts {
        products {
          edges {
            node {
              id
              content
              product {
                productId
                productPrice
              }
              uri
              title
              slug
              featuredImage {
                node {
                  altText
                  mediaDetails {
                    height
                    width
                  }
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `,
  });

  console.log(response);
  const products = response.data.products.edges.map(({ node }) => {
    const data = {
      ...node,
      ...node.product,
      featuredImage: {
        ...node.featuredImage.node,
      },
    };
    return data;
  });

  return {
    props: {
      products,
    },
  };
}