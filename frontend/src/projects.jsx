import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";

function Projects() {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate(); //create navigate function

  //variable with a function to later navigate to projects-details page while giving the id with it that later is defined when the button is clicked
  const handleDetails = (id) => {
    navigate("/projects-details", {
      state: { listingId: id}, // the data to send to the projects-details page
    });
  };

  const [copiedId, setCopiedId] = useState(null); // Hhoudt bij welk project uit de lijst gekopieërd is
  useEffect(() => {
    fetch("http://localhost:8000/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
      })
      .catch((error) => {
        console.error("Error when fetching listings:", error);
      })
  }, [])
  const handleShare = (id) => {
    const url = `${window.location.origin}/listings/${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000); // wordt gereset na 2 seconden
    });
  };

  return (
    <>
      {/*header*/}
        <header className="dashboard-header">
         <h1>Projecten</h1>
         <p>Hieronder vindt u een overzicht van al uw beschikbare projecten.</p>
        </header>

      {/*main*/}
      <main className="projects-generic">
        <div className="project-wrapper">
          <table className="projects-table">

            <thead>
            <tr>
              <th>Functie</th>
              <th>Bedrijf</th>
              <th>Acties</th>
              <th>Delen</th>
            </tr>
            </thead>

            <tbody>
            {/* map is used here to execute the code below on every item of the array from the API*/}
            {listings.map((listing) => (
                <tr key={listing.id} className="card projects-card">
                  <td>
                    <h2>{listing.title}</h2>
                  </td>

                  <td>
                    <p>{listing.company.name}</p>
                  </td>

                  <td>
                    {/* When the button below is clicked then that listing id is used to send to the projects-details page*/}
                    <button className="projects-details-button" onClick={() => handleDetails(listing.id)}>Details</button>
                  </td>
                  <td>

                    <button
                      className="projects-share-button"
                      onClick={() => handleShare(listing.id)}
                    >
                      {copiedId === listing.id ? "Copied ✓" : "Share"}
                      </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        </div>
      </main>
    </>
  )
}

export default Projects;
