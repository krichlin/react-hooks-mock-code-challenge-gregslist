import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( ) {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data",data)
      setListings(data)
    })
}, [])
  
  function removeListing(listingId) {
    console.log('remove listing')
  }

  const listingCards = listings.map((listing) => (
    <ListingCard key={listing.id} description={listing.description} image={listing.image} location={listing.location} />
  ))

  return (
    <main>
      <ul className="cards">
        {
          listingCards 
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
