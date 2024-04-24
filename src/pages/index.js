"use client";
import React, { useState } from "react";
import Link from "next/link";
import Layout from "@/app/components/Layout";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import styles from "@styles/page.module.scss";

import gstyles from "@styles/index.scss";

import { SiTemporal } from "react-icons/si";

export const metadata = {
  title: "SKILL TREE COLLECTABLES",
  description:
    "A COLLECTION OF STATS CARDS FROM THE FALLOUT SERIES ADAPTED FROM THE FALLOUT WIKI",
};

export default function Home({ products, skillspeciality }) {
  console.log(products);
  console.log(skillspeciality);

  const [activeSkillSpeciality, setActiveSkillSpeciality] = useState();
  let activeProducts = products;
  console.log(activeSkillSpeciality);

  if (activeSkillSpeciality) {
    activeProducts = activeProducts.filter(({ skillspeciality }) => {
      const skillspecialityIds = skillspeciality.map(({ slug }) => slug);
      return skillspecialityIds.includes(activeSkillSpeciality);
    });
  }

  return (
    <>
      <Layout>
        <main className="FSC__container">
          <ul className="FSC__filters">
            {skillspeciality.map((skillspeciality) => {
              return (
                <li key={skillspeciality.id}>
                  <button
                    className={`FSC__buttons__filter  `}
                    onClick={() => {
                      setActiveSkillSpeciality(skillspeciality.slug);
                    }}
                  >
                    <span className="FSC__buttons__filter__copy">
                      {skillspeciality.name}
                    </span>
                  </button>
                </li>
              );
            })}
            <li>
              <button
                type="button"
                className={`FSC__buttons__filter  `}
                autoFocus
                onClick={() => {
                  setActiveSkillSpeciality(undefined);
                }}
              >
                <span className="FSC__buttons__filter__copy">view all</span>
              </button>
            </li>
          </ul>

          <div className="FSC__product-grid">
            {activeProducts.map((product) => {
              const { featuredImage } = product;
              return (
                <div key={product.id} className="FSC__card">
                  <div className="cb">
                    <Link
                      className="FSC__link__wrapper"
                      href={`products/${product.slug}`}
                    >
                      <h3 className="FSC__card__title">{product.title}</h3>
                      <Image
                        src={product.featuredImage.sourceUrl}
                        blurDataURL={product.featuredImage.sourceUrl}
                        placeholder="blur"
                        alt={featuredImage.altText}
                        className="FSC__card__img"
                        // height width set to intrinsic image values
                        width={featuredImage.mediaDetails.width}
                        height={featuredImage.mediaDetails.height}
                        sizes="360px"
                        priority
                      />
                    </Link>
                    <div className="FSC__card__desc">
                      <div
                        dangerouslySetInnerHTML={{ __html: product.content }}
                      ></div>
                    </div>

                    <p className="FSC__card__price">${product.productPrice}</p>
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
                        cart
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
      </Layout>
    </>
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
      query AllProductsAndSkillSpecialities {
        products(first: 33) {
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
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              skillspeciality {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
            }
          }
        }
        allSkillspeciality {
          edges {
            node {
              id
              name
              slug
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
      skillspeciality: node.skillspeciality.edges.map(({ node }) => node),
    };
    return data;
  });

  const skillspeciality = response.data.allSkillspeciality.edges.map(
    ({ node }) => node
  );

  return {
    props: {
      products,
      skillspeciality,
    },
  };
}
