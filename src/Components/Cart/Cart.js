import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
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
          <FontAwesomeIcon className="icon" icon={faTrashCan} />
        </button>
        <br />
        <button className="order-btn">{children}</button>
      </div>
    </div>
  );
};

export default Cart;
