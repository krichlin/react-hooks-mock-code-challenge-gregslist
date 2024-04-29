import React, {useState} from "react";

function ListingCard(props) {

  const [fav, setFav] = useState(false)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={props.image} alt={"description"} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={setFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={setFav}>☆</button>
        )}
        <strong>{props.description}</strong>
        <span> · {props.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
