import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { ProductCard } from "~/components/product";

const CategoryGrid = () => {
  const HOME_CATEGORY_QUERY = graphql`
    query {
      shopifyCollection(handle: { eq: "frontpage" }) {
        description
        products {
          ...ProductCardFragment
        }
      }
    }
  `;
  const data = useStaticQuery(HOME_CATEGORY_QUERY);
  const { products, description } = data.shopifyCollection;
  return (
    <div className="py-20">
      <div className="container max-w-4xl mx-auto mb-10 text-3xl font-bold text-center">
        {description}
      </div>
      <div className="container grid gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.handle} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
