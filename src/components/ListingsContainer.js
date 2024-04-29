import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log("data",data)
      setListings(data)
    })
}, [])
  
  return (
    <main>
      <ul className="cards">
        {
          // console.log(listings)
          
          listings.map((listings) => (
            <ListingCard key={listings.id} description={listings.description} image={listings.image} location={listings.location} />
          ))

        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
