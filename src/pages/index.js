import React from "react";
import { Layout } from "~/components/Layout";
import Hero from "~/components/Hero";
import CategoryGrid from "~/components/CategoryGrid";

const HomePage = () => {
  return (
    <Layout>
      <Hero
        headline="welcome to our shop"
        description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
        image="https://images.unsplash.com/photo-1516789349110-e9265a848369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      />
      <CategoryGrid />
    </Layout>
  );
};

export default HomePage;
