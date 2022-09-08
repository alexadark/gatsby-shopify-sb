import React from "react";
import { Header } from "./header/Header";
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok";
import Hero from "~/components/Hero";
import CategoryGrid from "~/components/CategoryGrid";
import Grid from "~/components/Grid";
import FeaturedProducts from "~/components/FeaturedProducts";

storyblokInit({
  accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    hero: Hero,
    grid: Grid,
    "category-grid": CategoryGrid,
    "featured-products": FeaturedProducts,
  },
});

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
