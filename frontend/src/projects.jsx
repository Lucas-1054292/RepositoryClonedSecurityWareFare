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

  const [copiedId, setCopiedId] = useState(null); // Houdt bij welk project uit de lijst gekopieërd is, begint met een waarde van null en wordt ingesteld op het id van de gekopieërde waarde als de gebruiker op de knop drukt
  useEffect(() => {     // Deze functie haalt alle informatie op van de lokale backend en slaat de informatie op met setListings
    fetch(`http://localhost:8000/listings`)
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
      })
      .catch((error) => {
        console.error("Error when fetching listings:", error);
      })
  }, [])
  const handleShare = (id) => {   //Deze functie wordt aangeroepen als de gebruiker een bepaald project wil delen.
    const url = `${window.location.origin}/projects-details?id=${id}`; // Het bouwt een deelbare URL
    navigator.clipboard.writeText(url).then(() => { //kopieërd de URL naar het klemboord via navigator.clipboard
      setCopiedId(id);                                    //Maakt van copiedId het id van de net opgehaalde URL
      setTimeout(() => setCopiedId(null), 2000); // Reset copiedId na 2 seconden weer terug naar de waarde null, zodat de bevestiging verdwijnt
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
          <div className="projects-cards-grid">

            {listings.map((listing) => (
              <div key={listing.id} className="card projects-card">

                <div className="card-header">
                  <h2>Functie: {listing.title}</h2>
                  <p>Bedrijf: {listing.company.name}</p>
                </div>

                <div className="card-actions">
                  <button
                    className="projects-details-button"
                    onClick={() => handleDetails(listing.id)}
                  >
                    Details
                  </button>
                  <button
                    className="projects-share-button"
                    onClick={() => handleShare(listing.id)}
                  >
                    {copiedId === listing.id ? "Copied ✓" : "Share"}
                  </button>
                </div>

              </div>
            ))}

          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
