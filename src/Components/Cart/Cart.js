import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {

    let price=0;
    let shipping=0;


    for (const product of cart) {
         shipping=shipping+product.shipping;
         price=price+product.price;
        
        
    }

    return (
        <div className='cart'>
            <div className="cart-info">
            <h2>Order Summary</h2>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: $</p>
            <h3>Grand Total: ${price+shipping}</h3>
            </div>
            <div className="btn">
                
                <button className="clear-btn">
                    <p>Clear Cart</p>
                    
                    </button>
                <br />
                <button className="order-btn">
                    Review Order
                </button>
            </div>

        </div>
    );
};

export default Cart;