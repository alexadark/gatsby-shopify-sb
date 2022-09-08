import React from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

const Grid = ({ blok }) => {
  return (
    <div
      key={blok._uid}
      className="container mx-auto flex justify-between py-10 gap-5"
      {...storyblokEditable(blok)}
    >
      {blok.columns.map((blok) => (
        <div key={blok._uid} className="flex-1">
          <StoryblokComponent blok={blok} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
