import React from "react";

const Card = ({ image, title, description, onClick, buttonName }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card cap" width="100%" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn btn-primary" onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
};

export default Card;
