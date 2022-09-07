import React, { useContext } from "react";
import { StoreContext } from "~/context/StoreContext";

export const ButtonAddToCart = ({ variantId, quantity, ...props }) => {
  const { addToCart } = useContext(StoreContext);
  return (
    <button onClick={() => addToCart(variantId, quantity)} {...props}>
      Add To Cart
    </button>
  );
};
