import React, {useState} from "react";

function ListingCard(listing, removeListing) {

  const [fav, setFav] = useState(false)

  const {id, description, image, location} = listing;

  function handleFavoritedClick() {
    console.log('clicked')
    // setFav(!fav)
    setFav((currentFavoritedState) => !currentFavoritedState )
  }

  function handleDeleteClick() {
    console.log('delete clicked')
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then((resp) => {
      console.log(resp)
      if (resp.ok) {
        // filter and update state of listings to remove from the dom.
      }
      else {
        console.log('handle error')
      }
    })
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
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
