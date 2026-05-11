import React, { useState, useEffect } from "react";
import {Link, useLocation } from "react-router-dom";


function ProjectDetails() {
  const [listing, setProject] = useState(null);

  const location = useLocation();
  const listingId = location.state?.listingId;

  useEffect(() => {
    if (!listingId) return;

    fetch(`http://localhost:8000/listings/${listingId}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch((error) => {
        console.error("Error when fetching listing id:", error);
      })
  }, [listingId])


  return (
    <>
      {/*header*/}
        <header className="dashboard-header">
         <h1>Project details</h1>
         <p>Hieronder vindt u de details bij uw aangeklikte project.</p>
        </header>

      {/*main*/}
      <main className="projects-generic">
        <div className="project-wrapper">
          <table className="projects-table">

            <thead>
            <tr>
              <th>Functie</th>
              <th>Korte beschrijving</th>
              <th>Start datum</th>
              <th>Contactpersoon</th>
              <th>E-mailadres</th>
              <th>Acties</th>
            </tr>
            </thead>

            <tbody>
            {listing && (
                <tr className="card projects-card">
                  <td>
                    <h2>{listing.title}</h2>
                  </td>

                  <td>
                    <p>Als {listing.title} bij {listing.company.name} verwachten wij een gedreven student met ervaring in onder andere: </p>
                    <br/>
                    <ul>
                      <li>React, Python, Javascript, SQL</li>
                      <li>Ervaring met Agile frameworks zoals Scrum is een pré</li>
                      <li>Ervaring met datamodellering zoals ERD's is een pré</li>
                    </ul>
                  </td>

                  <td>{listing.start_date}</td>
                  <td>{listing.contact.name}</td>
                  <td>{listing.contact.email}</td>

                  <td>
                    <button className="projects-details-button">Solliciteren</button>
                  </td>
                </tr>
            )}
          </tbody>
        </table>
        </div>
      </main>
    </>
  )
}

export default ProjectDetails;
