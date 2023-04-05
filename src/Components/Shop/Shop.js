import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    for (const id in storedCart) {
      let addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    /* Another Seystem Product check and quantity added */
    /* 
  let newCart = []
     const exists = cart.find(pd=>pd.id===product.id)
    if (!exists) {
        product.quantity=1
        newCart=[...cart,product]
    }else{
        exists.quantity=exists.quantity+1;
        const remaining = cart.filter(pd=>pd.id!==product.id);
        newCart=[...remaining,exists]
    } */

    const newItem = [...cart, product];
    setCart(newItem);
    addToDb(product.id);
  };

  const handleClearCart = () => {
    setCart([]);
    /* Delete Localstorage Data */
    deleteShoppingCart();
  };

  return (
    <div className="container">
      <div className="shop-container">
        <div className="products-container">
          {/* Show Product Use Map */}

          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart handleClearCart={handleClearCart} cart={cart}>
            <Link className="Review__Btn" to="/orders">
              <span>Review Order</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
