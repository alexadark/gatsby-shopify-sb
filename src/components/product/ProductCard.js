import React from "react";
import { ButtonAddToCart } from "~/components/shoppingCart";
import { Link } from "gatsby";

export const ProductCard = ({ product }) => {
  const {
    title,
    priceRangeV2: {
      maxVariantPrice: { amount: maxPrice },
      minVariantPrice: { amount: minPrice, currencyCode: currency },
    },
    media,
    featuredImage,
    handle,
    variants,
  } = product;

  const price = maxPrice === minPrice ? `${minPrice}` : `from ${minPrice}`;
  return (
    <div className="border product-card">
      <Link to={`/${handle}`} key={handle}>
        <div className="product-card__image">
          {/* <Image img={media[0].image} /> */}
          <img src={featuredImage.src} alt={featuredImage.atltText} />
        </div>
        <div className="p-4 text-center lowercase product-card__info ">
          <h3 className="font-bold">{title}</h3>
          <div className="lowercase product-card__price">
            {price}
            {currency}
          </div>
        </div>
      </Link>
      <div className="flex justify-center mb-5">
        <ButtonAddToCart variantId={variants[0].shopifyId} className="btn" />
      </div>
    </div>
  );
};
