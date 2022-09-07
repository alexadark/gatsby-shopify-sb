const fs = require("fs");
require("dotenv").config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    ".env",
});
module.exports = {
  siteMetadata: {
    title: `gatsby-shopify-base`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        password: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
        shopifyConnections: ["collections"], // source product collections too
      },
    },
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "gQ2wtrJ5isRY9KYQgwQOnQtt",
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        localAssets: true, // Optional parameter to download the images to use with Gatsby Image
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
