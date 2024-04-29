import React, {useState} from "react";

function ListingCard(listing) {

  const [fav, setFav] = useState(false)

  const {id, description, image, location} = listing;

  function handleFavoritedClick() {
    console.log('clicked')
    // setFav(!fav)
    setFav((currentFavoritedState) => !currentFavoritedState )
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={handleFavoritedClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoritedClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
