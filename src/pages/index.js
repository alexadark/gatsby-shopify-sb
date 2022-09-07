import React from "react";
import { Layout } from "~/components/Layout";
import Hero from "~/components/Hero";
import CategoryGrid from "~/components/CategoryGrid";
import { graphql } from "gatsby";
import {
  useStoryblokState,
  StoryblokComponent,
  storyblokEditable,
} from "gatsby-source-storyblok";

const HomePage = ({ data }) => {
  let story = data.storyblokEntry;
  story = useStoryblokState(story);
  console.log("story", story);

  const components = story.content.body?.map((blok) => (
    <StoryblokComponent blok={blok} key={blok._uid} />
  ));
  console.log("components", components);

  return (
    <Layout>
      <div {...storyblokEditable(story.content)}>
        {/* <Hero
          headline="welcome to our shop"
          description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
          image="https://images.unsplash.com/photo-1516789349110-e9265a848369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        /> */}
        {components}
      </div>
      <CategoryGrid />
    </Layout>
  );
};

export default HomePage;
export const pageQuery = graphql`
  query {
    storyblokEntry(full_slug: { eq: "home" }) {
      name
      content
      full_slug
      slug
    }
  }
`;
