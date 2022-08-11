import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(listings => setListings(listings))
  }, [])

  const handleDeleteListing = (deletedItem) => {
    const updatedListings = listings.filter(listing => listing.id !== deletedItem)
    setListings(updatedListings)
  }

  const displayedListing = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header
        onSearch={setSearch}
      />
      <ListingsContainer
        listings={displayedListing}
        onDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
