import React from "react";
import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@styles/page.module.scss";

import gstyles from "@styles/index.scss";

import { SiTemporal } from "react-icons/si";
import Layout from "@/app/components/Layout";

export default function Product({ product }) {
  const router = useRouter();
  console.log(`Building slug:  `);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { featuredImage } = product;

  return (
    <>
      <Layout>
        <Head>
          <title>{product.title}</title>
          <meta name="description" content={product.title} key="desc" />
        </Head>
        <main className="FSC__container">
          <div className="FSC__filters">Product</div>
          <div className="FSC__filters">{product.title}</div>
          <div className="FSC__product-grid">
            <div className="FSC__card">
              <div className="cb">
                <h3 className="FSC__card__title">{product.title}</h3>
                <Image
                  width={featuredImage.mediaDetails.width}
                  height={featuredImage.mediaDetails.height}
                  sizes="360px"
                  src={featuredImage.sourceUrl}
                  alt={featuredImage.altText}
                  className="FSC__card__img"
                  // height width set to intrinsic image values
                />
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
                    <SiTemporal className="FSC__utility__spin" /> add to cart
                  </div>
                  <div className="FSC__buttons__secondary__bottom"></div>
                  <div className="FSC__buttons__secondary__base"></div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
// product data

export async function getStaticProps({ params }) {
  const { productSlug } = params;
  console.log(productSlug);
  const client = new ApolloClient({
    uri: "https://insightsurfer.net/website_99e336d3/graphql",
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query: gql`
      query ProductBySlug($slug: ID!) {
        product(id: $slug, idType: SLUG) {
          title

          product {
            productPrice
            productId
          }
          content
          featuredImage {
            node {
              altText
              sourceUrl
              mediaDetails {
                height
                width
              }
              id
            }
          }
        }
      }
    `,
    variables: {
      slug: productSlug,
    },
  });

  console.log(response);

  const product = {
    ...response.data.product,
    ...response.data.product.product,
    featuredImage: {
      ...response.data.product.featuredImage.node,
    },
  };

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
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
              slug
            }
          }
        }
      }
    `,
  });

  const paths = response.data.products.edges.map(({ node }) => {
    return {
      params: {
        productSlug: node.slug,
      },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: true,
  };
}
