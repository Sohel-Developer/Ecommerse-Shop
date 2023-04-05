import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart); //localstorage data
  const handaleRemoveFromCart = (id) => {
    const remaning = cart.filter((pd) => pd.id !== id);
    /* Remove From Db */
    removeFromDb(id);
    /* Update Display After Delete */
    setCart(remaning);
  };

  return (
    <div className="shop-container container">
      <div className="">
        {cart.map((product) => (
          <ReviewItem
            handaleRemoveFromCart={handaleRemoveFromCart}
            key={product.id}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
