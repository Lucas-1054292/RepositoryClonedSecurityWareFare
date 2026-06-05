import React, { useState, useEffect } from "react";
import {Link, useLocation, useSearchParams } from "react-router-dom";
import Apply from "./application.jsx"
import {storageAvailable} from "./storageAvailable.jsx"

function ProjectDetails() {
  const [listing, setProject] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const location = useLocation(); // location gives information about the page, later used to get the id from the listing
  //const listingId = location.state?.listingId; // if the state exists then it accesses the listingId
  const [storageError, setStorageError] = useState(false)
  const [searchParams] = useSearchParams() // if the state exists then it accesses the listingId
  const listingId = location.state?.listingId || searchParams.get("id"); //Reads from router state, or from a query (shared link)

  useEffect(() => {
    if (!listingId) return; // this is to prevent errors if the user types the route in the browser instead of through /projects and through the details button

    fetch(`http://localhost:8000/listings/${listingId}`)
      .then((response) => response.json())
      .then((data) => {
        if (storageAvailable("localStorage")) {
          const saved = JSON.parse(localStorage.getItem("savedProjects") || "[]"); // check in localstorage if this project is already saved.
          const alreadySaved = saved.some((p) => p.id === listingId)
          setIsSaved(alreadySaved);
        } else {
          setStorageError(true);
        }
        setProject(data);
      })
      .catch((error) => {
        console.error("Error when fetching listing id:", error);
      })
  }, [listingId]) //this is used so that when the id changes (by navigation to a different listing for example) it gives back a different fetched listing

  const handleSave = () => {
    if (!listing) return // prevent saving if listing data is not loaded yet

    // get the current saved projects list from localstorage
    if (storageAvailable("localStorage")){
    const saved = JSON.parse(localStorage.getItem("savedProjects") || "[]");

    // create a new project object with relevant data
    const NewProject = {
      id: listingId,
      title: listing.title,
      companyName: listing.company?.name
    };

    // add the new project to the list and save it in localstorage
    const newList =[...saved, NewProject]
    localStorage.setItem("savedProjects", JSON.stringify(newList))
    setIsSaved(true);// update state so the button changes to "Opgeslagen"
} else{
    setStorageError(true);
    }
  };

  return (
    <>
      {/*header*/}
        <header className="dashboard-header">
         <h1>Project details</h1>
         <p>Hieronder vindt je de details bij uw aangeklikte project.</p>
        </header>

      {/*main*/}
      <main className="projects-generic">
        <div className="project-wrapper">
          {storageError && (
            <p>Opslaan is niet mogelijk in deze browser.</p>
          )}
          <table className="projects-table">

            <thead>
            <tr>
              <th>Functie</th>
              <th>Korte beschrijving</th>
              <th>Start datum</th>
              <th>Contactpersoon</th>
              <th>E-mailadres</th>
              <th>Acties</th>
              <th>Opslaan</th>
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

                  {/*Save button, disabled when project is already saved*/}
                  <td>
                    <button
                      onClick={handleSave} disabled={isSaved} className="projects-details-button ">
                      {isSaved ? "Opgeslagen": "Opslaan"}
                    </button>
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
