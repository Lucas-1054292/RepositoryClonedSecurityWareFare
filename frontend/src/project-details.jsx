import React, { useState, useEffect } from "react";
import {Link, useLocation } from "react-router-dom";
import Apply from "./application.jsx"

function ProjectDetails() {
  const [listing, setProject] = useState(null);

  const location = useLocation(); // location gives information about the page, later used to get the id from the listing
  const listingId = location.state?.listingId; // if the state exists then it accesses the listingId

  useEffect(() => {
    if (!listingId) return; // this is to prevent errors if the user types the route in the browser instead of through /projects and through the details button

    fetch(`http://localhost:8000/listings/${listingId}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch((error) => {
        console.error("Error when fetching listing id:", error);
      })
  }, [listingId]) //this is used so that when the id changes (by navigation to a different listing for example) it gives back a different fetched listing


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
            {listing && (   //if the listing exists and is correctly fetched then execute the code below
                <tr className="card projects-card">
                  <td>
                    <h2>{listing.title}</h2>
                  </td>

                  <td>
                    <p>{listing.description}</p>
                  </td>

                  <td>{listing.start_date}</td>
                  <td>{listing.contact.name}</td>
                  <td>{listing.contact.email}</td>

                  <td>
                    <Apply
                      listingId={listingId} email={listing.contact.email} companyName={listing.company.name}/>
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
