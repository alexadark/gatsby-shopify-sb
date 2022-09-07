import React, { useContext, useState } from "react";
import { StoreContext } from "~/context/StoreContext";

export const Coupons = (props) => {
  const { checkout, checkCoupon, removeCoupon } = useContext(StoreContext);
  const [coupon, setCoupon] = useState("");
  return (
    <div {...props}>
      {checkout.discountApplications?.length > 0 ? (
        <div className="mt-10">
          <p>
            {checkout.discountApplications[0].code}-
            {checkout.discountApplications[0].value.percentage}%
          </p>
          <button
            className="p-2 mb-5 font-bold text-white bg-purple-600 rounded-sm"
            onClick={() => removeCoupon(checkout.discountApplications[0].code)}
          >
            Remove Coupon
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            checkCoupon(coupon);
          }}
        >
          <label htmlFor="coupon">Coupon</label>
          <input
            value={coupon}
            name="coupon"
            onChange={(e) => setCoupon(e.target.value)}
            type="text"
            className="w-full h-10 mb-5 border "
          />
          <button className="p-2 mb-5 font-bold text-white bg-purple-400 rounded-sm">
            Check Coupon
          </button>
        </form>
      )}
    </div>
  );
};
