import { graphql } from "gatsby";
export const fragments = graphql`
  fragment ProductFragment on ShopifyProduct {
    title
    description
    hasOnlyDefaultVariant
    hasOutOfStockVariants
    id
    priceRangeV2 {
      maxVariantPrice {
        amount
      }
      minVariantPrice {
        amount
      }
    }
    options {
      name
      position
      shopifyId
      values
    }
    variants {
      availableForSale
      price
      shopifyId
      displayName
      image {
        altText
        gatsbyImageData
      }
      selectedOptions {
        name
        value
      }
      title
      media {
        ... on ShopifyMediaImage {
          id
          image {
            gatsbyImageData
            altText
          }
        }
      }
    }
    featuredImage {
      src
      altText
    }
    media {
      ... on ShopifyMediaImage {
        image {
          gatsbyImageData
          altText
        }
      }
    }
  }

  fragment ProductCardFragment on ShopifyProduct {
    title
    handle
    shopifyId
    id
    featuredImage {
      src
      altText
    }
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
`;
