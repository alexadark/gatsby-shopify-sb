import React from "react";
import { Header } from "./header/Header";
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok";
import Hero from "~/components/Hero";

storyblokInit({
  accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    hero: Hero,
  },
});

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
