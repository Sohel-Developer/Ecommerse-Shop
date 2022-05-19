import React from 'react';
import './Product.css'
const Product = ({product,handleAddToCart}) => {

    const {name,img,price,ratings}=product;
    return (
        <div>
            <div className="product">
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
                <div className="product-info">
                    <h4>{name}</h4>
                    <p>{price}</p>
                    <p>Ratings: {ratings} start</p>
                </div>
                <button onClick={()=>handleAddToCart(product)} className='cart-btn'>Add To Cart</button>
                
            </div>
            
        </div>
    );
};

export default Product;