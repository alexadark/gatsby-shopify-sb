import React, { useContext } from "react";
import { StoreContext } from "~/context/StoreContext";
import Layout from "~/components/Layout";
import { CartItem, Coupons } from "~/components/shoppingCart";

const CartPage = () => {
  const { checkout } = useContext(StoreContext);

  return (
    <Layout>
      <div className="container mx-auto my-10">
        <h1>Cart</h1>
        <div>
          {checkout.lineItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
        <div>
          {/* <Coupons className="my-10" /> */}
          <a href={checkout.webUrl} target="_blank" className="btn">
            {checkout.totalPriceV2?.amount}$ Checkout
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
