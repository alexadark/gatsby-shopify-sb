import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";

const FeaturedProducts = ({ blok }) => {
  return (
    <div key={blok._uid} {...storyblokEditable(blok)}>
      FeaturedProducts
    </div>
  );
};

export default FeaturedProducts;
