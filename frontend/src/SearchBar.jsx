import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function SearchBar() {
    const [listings, setListings] = useState([]); /* used as the state of the API data*/
    const [search, setSearch] = useState(''); /* used to track the state of the input*/

    useEffect(() => {     // Deze functie haalt alle informatie op uit de API en slaat de informatie op in listings via setListings
    fetch("http://localhost:8000/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
      })
      .catch((error) => {
        console.error("Error when fetching listings:", error);
      })
  }, [])

  return (
    <>
      {/*main*/}
      <main className="dashboard-main">
        <div className="search-results">
            <input type="text" name="search" placeholder="Zoeken" onChange={(event) => setSearch(event.target.value)}/>
            {search != '' && listings.filter((listing) => {
              return listing.title.toLowerCase().includes(search.toLowerCase()) || listing.company.name.toLowerCase().includes(search.toLowerCase())
            }).map((listing) => (
                <p key={listing.id}>- {listing.title} - {listing.company.name}</p>
            ))}
        </div>
      </main>
    </>
  )
}

export default SearchBar;
