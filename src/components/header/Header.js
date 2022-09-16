import React, { useContext } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Cart } from "~/components/shoppingCart";
import { StoreContext } from "~/context/StoreContext";
import { FaShoppingCart as CartIcon } from "react-icons/fa";

export const Header = () => {
  const { checkout } = useContext(StoreContext);
  const qty = checkout.lineItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const data = useStaticQuery(graphql`
    query {
      allShopifyCollection {
        nodes {
          handle
          title
        }
      }
    }
  `);
  const collections = data.allShopifyCollection.nodes.filter(
    (item) => item.handle !== "frontpage"
  );
  return (
    <header className="py-4 text-white bg-black">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-xl font-semibold">
          <Link to="/">Gatsby - Shopify</Link>
        </h1>
        <nav>
          <ul className="flex items-center justify-between space-x-2">
            {collections.map((collection) => (
              <li key={collection.handle}>
                <Link
                  to={`/collections/${collection.handle}`}
                  className="lowercase"
                >
                  {collection.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* <Cart /> */}
        <Link to="/cart">
          <div className="relative ">
            {qty > 0 && (
              <div className="absolute flex items-center justify-center w-5 h-5 text-white bg-teal-500 rounded-full left-3 bottom-3">
                {qty}
              </div>
            )}
            <CartIcon className="text-2xl" />
          </div>
        </Link>
      </div>
    </header>
  );
};
