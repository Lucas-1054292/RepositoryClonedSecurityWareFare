import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function Projects() {
  const [listings, setListings] = useState([]);

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


  return (
    <>
      {/*header*/}
        <header className="dashboard-header">
         <h1>Projecten</h1>
         <p>Hieronder vindt u een overzicht van al uw beschikbare projecten.</p>
        </header>

      {/*main*/}
      <main className="projects-generic">
        <div class="project-wrapper">
          <table className="projects-table">

            <thead>
            <tr>
              <th>Functie</th>
              <th>Bedrijf</th>
              <th>Acties</th>
            </tr>
            </thead>

            <tbody>
            {listings.map((listing) => (
                <tr key={listing.id} className="card projects-card">
                  <td>
                    <h2>{listing.title}</h2>
                  </td>

                  <td>
                    <p>{listing.company.name}</p>
                  </td>

                  <td>
                    <button className="projects-details-button">Details</button>
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
