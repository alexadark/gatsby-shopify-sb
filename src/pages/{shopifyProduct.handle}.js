import React, { useState } from "react";
import { graphql } from "gatsby";
import { Layout } from "~/components/Layout";
import { Image } from "~/components/ui-components/Image";
import { ButtonAddToCart, QuantityControls } from "~/components/shoppingCart";
import { useOptions } from "~/hooks/useOptions";
import { OptionSelector } from "~/components/product";

const ProductPage = ({ data }) => {
  const { title, description, media, variants, options } = data.shopifyProduct;
  const [quantity, setQuantity] = useState(1);

  const { selectedOptions, setSelectedOptions, selectedVariant } = useOptions(
    options,
    variants
  );

  let { price, image } = selectedVariant;
  image = image ? image : media[0].image;

  return (
    <Layout>
      <div className="container items-center gap-10 mx-auto my-10 product md:flex">
        <div className="flex-1 product__image">
          {" "}
          <Image img={image} />{" "}
        </div>
        <div className="flex-1 product__info">
          <h1 className="mb-2 font-bold">{title}</h1>
          <div className="mb-2 font-bold product__price">{price}eur</div>
          <div className="product__description">{description}</div>
          {options.length > 1 && (
            <OptionSelector
              options={options}
              setSelectedOptions={setSelectedOptions}
              selectedOptions={selectedOptions}
            />
          )}
          <QuantityControls quantity={quantity} setQuantity={setQuantity} />

          <div className="mt-5 buttons">
            <ButtonAddToCart
              variantId={selectedVariant.shopifyId}
              quantity={quantity}
              className="btn"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;

export const pageQuery = graphql`
  query ($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      ...ProductFragment
    }
  }
`;
