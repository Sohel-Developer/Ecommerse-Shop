import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product }) => {
  const { name, quantity, img, price, shipping } = product;
  return (
    <div className="review__item">
      <div className="review__detail">
        <img src={img} alt="" />
        <div>
          <h3>{name}</h3>
          <p>
            Price : <span>$ {price}</span>
          </p>
          <p>
            Shipping Charge : <span>$ {shipping}</span>
          </p>
          <p>Quantity : {quantity} </p>
        </div>
      </div>

      <div>
        <span>
          <FontAwesomeIcon className="deleteIcon" icon={faTrashCan} />
        </span>
      </div>
    </div>
  );
};

export default ReviewItem;
