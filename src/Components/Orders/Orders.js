import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import "./Orders.css";
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

  const handleClearCart = () => {
    setCart([]);
    /* Delete Localstorage Data */
    deleteShoppingCart();
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
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link className="checkOut" to="/checkout">
            <span>CheckOut</span>
            <span>
              <FontAwesomeIcon icon={faCreditCard} />
            </span>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
