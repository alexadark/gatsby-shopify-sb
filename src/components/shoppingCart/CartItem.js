import React, { useState, useContext } from "react";
import { QuantityControls } from "~/components/shoppingCart";
import { StoreContext } from "~/context/StoreContext";

export const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { removeFromCart } = useContext(StoreContext);
  return (
    <div className="flex justify-between py-5 border-b">
      <div className="flex items-center gap-5">
        <div className="w-[150px]">
          <img src={item.variant.image.src} alt="" />
        </div>

        <div className="">
          <div className="font-bold">{item.title}</div>
          <div className="text-sm">{item.variant.title}</div>
          {/* <QuantityControls
            item={item}
            quantity={quantity}
            setQuantity={setQuantity}
            isInCart
          /> */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="cursor-pointer btn "
          >
            Delete
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold">{item.quantity}</div>
        <div className="text-sm">{item.variant.price}</div>
      </div>
    </div>
  );
};
