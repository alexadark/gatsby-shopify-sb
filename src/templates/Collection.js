import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "~/components/Layout";
import { Image } from "~/components/ui-components";
import { ButtonAddToCart } from "~/components/shoppingCart";

const Collection = ({ data }) => {
  const { shopifyCollection } = data;
  const { title, description } = shopifyCollection;
  const products = data.allShopifyProduct.nodes;
  return (
    <Layout>
      <div className="container px-4 py-10 mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold ">{title}</h1>
          <div className="collection-description">{description}</div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => {
            const {
              title,
              priceRangeV2: {
                maxVariantPrice: { amount: maxPrice },
                minVariantPrice: { amount: minPrice, currencyCode: currency },
              },
              media,
              handle,
              variants,
            } = product;

            const price =
              maxPrice === minPrice ? `${minPrice}` : `from ${minPrice}`;
            return (
              <div className="border product-card" key={product.handle}>
                <Link to={`/${handle}`} key={handle}>
                  <div className="product-card__image">
                    <Image img={media[0].image} />
                  </div>
                  <div className="p-4 text-center lowercase product-card__info ">
                    <h3 className="font-bold">{title}</h3>
                    <div className="lowercase product-card__price">
                      {price}
                      {currency}
                    </div>
                  </div>
                </Link>
                <div className="flex justify-center mb-5">
                  <ButtonAddToCart
                    variantId={variants[0].shopifyId}
                    className="btn"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Collection;

export const pageQuery = graphql`
  query ($handle: String!, $limit: Int!, $skip: Int) {
    shopifyCollection(handle: { eq: $handle }) {
      title
      handle
      description
    }
    allShopifyProduct(
      filter: { collections: { elemMatch: { handle: { eq: $handle } } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        handle
        shopifyId
        id
        media {
          ... on ShopifyMediaImage {
            id
            image {
              gatsbyImageData
              altText
            }
          }
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants {
          shopifyId
          id
        }
      }
    }
  }
`;
