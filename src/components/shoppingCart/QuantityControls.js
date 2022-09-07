import React, { useContext } from "react";
import { StoreContext } from "~/context/StoreContext";

export const QuantityControls = ({
  quantity,
  setQuantity,
  isInCart,
  variantId,
  item,
}) => {
  const { removeFromCart, addToCart } = useContext(StoreContext);

  const removeAddToCart = (item, quantity, variantId) => {
    removeFromCart(item.id);
    addToCart(variantId, quantity);
  };
  const handleDelete = (item, quantity, variantId) => {
    if (isInCart) {
      removeAddToCart(item, quantity, variantId);
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handleAdd = (item, quantity, variantId) => {
    if (isInCart) {
      removeAddToCart(item, quantity, variantId);
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="my-5 qty">
      <div className="mb-3 qty__label">Quantity</div>
      <div className="inline-flex gap-5 px-4 py-2 border qty__control ">
        <button
          className={` qty__control-btn ${quantity === 0 && "text-gray-300"}`}
          onClick={() => handleDelete(item, quantity, variantId)}
        >
          -
        </button>
        <div className="qty__control-value">{quantity}</div>
        <button
          className="qty__control-btn"
          onClick={() => handleAdd(item, quantity, variantId)}
        >
          +
        </button>
      </div>
    </div>
  );
};
