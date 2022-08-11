import React, { useState } from "react";

function ListingCard({ onDeleteListing, id, description, image, location }) {
  const [favorite, setFavorite] = useState(false)

  const handleFavoriteClick = () => setFavorite(!favorite)
  
  const handleDeleteBtn = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => {onDeleteListing(id)})
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteBtn} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
