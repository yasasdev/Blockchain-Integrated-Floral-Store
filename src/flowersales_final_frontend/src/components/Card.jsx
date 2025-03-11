import React from 'react';

const Card = ({ image, name, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2>{name}</h2>
        <p>${price}</p>
        <button className="card-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
