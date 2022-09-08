import React from "react";
import { storyblokEditable } from "gatsby-source-storyblok";

const FeaturedProducts = ({ blok }) => {
  const { headline, products } = blok;
  console.log("blok products", blok);
  //   const products = blok.product.items;
  return (
    <div
      key={blok._uid}
      {...storyblokEditable(blok)}
      className="container mx-auto"
    >
      <h1 className="mb-5 text-5xl font-bold text-center">{headline}</h1>
      <div className="grid gap-5 mb-10 md:grid-cols-3">
        {products.items?.map((product) => {
          const { description, name, image, variant, id } = product;
          return (
            <div className="border product-card">
              <div key={id}>
                <div className="product-card__image">
                  {/* <Image img={media[0].image} /> */}
                  <img src={image} />
                </div>
                <div className="p-4 text-center lowercase product-card__info ">
                  <h3 className="font-bold">{name}</h3>
                  {/* <div className="lowercase product-card__price">
              {price}
              {currency}
            </div> */}
                </div>
              </div>
              {/* <div className="flex justify-center mb-5">
          <ButtonAddToCart variantId={variants[0].shopifyId} className="btn" />
        </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
