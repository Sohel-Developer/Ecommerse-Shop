import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = ({ cart, handleClearCart }) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    product.quantity = product.quantity || 1;
    shipping = shipping + product.shipping;
    price = price + product.price * product.quantity;
    quantity = quantity + product.quantity;
  }

  const tax = (price * 7) / 100;

  const grandTotal = tax + price + shipping;

  return (
    <div className="cart">
      <div className="cart-info">
        <h2>Order Summary</h2>
        <p>Selected Item: {quantity}</p>
        <p>Total Price: $ {price}</p>
        <p>Total Shipping Charge: $ {shipping}</p>
        <p>Tax: $ {tax.toFixed(2)}</p>
        <h3>Grand Total: $ {grandTotal.toFixed(2)}</h3>
      </div>
      <div className="btn">
        <button onClick={handleClearCart} className="clear-btn">
          Clear Cart
        </button>
        <br />
        <Link to="/orders">
          <button className="order-btn">Order Review</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
