import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
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
        <button className="clear-btn">Clear Cart</button>
        <br />
        <button className="order-btn">Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
