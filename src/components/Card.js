import React from "react";

const Card = ({ image, title, description, addToCart }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={image}
        alt="Card image cap"
        width="100%"
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn btn-primary" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
