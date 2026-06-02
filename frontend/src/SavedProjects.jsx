import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function SavedProjects() {
  const [savedProjects, setSavedProjects] = useState([]);
  const navigate = useNavigate();
  const [storageError, setStorageError] = useState(false)

  const handleDetials =(id) => {
    navigate("/projects-details", {
      state: {listingId: id},
    });
  };

  // Load saved projects from localStorage on mount
  useEffect(() => {
    if (storageAvailable("localStorage")) {
      const saved = JSON.parse(localStorage.getItem("savedProjects") || "[]");
      setSavedProjects(saved);
    } else {
      setStorageError(true); // foutmelding aanzetten
    }
    }, []);

  // Remove project from localStorage and update state
  const handleDelete = (id) => {
    if (storageAvailable("localStorage")) {
      const newList = savedProjects.filter((project) => project.id !== id);
      localStorage.setItem("savedProjects", JSON.stringify(newList));
      setSavedProjects(newList);
    } else {
      setStorageError(true) // foutmelding aanzetten
    }
  };

  return (
    <>
      {/* Header */}
      <header className="dashboard-header">
        <h1>Opgeslagen Projecten</h1>
        <p>Hieronder vindt u uw projecten die zijn opgeslagen.</p>
      </header>

      <main style={{padding: "1.25rem"}}>
        <div className="project-wrapper">
          {/* Show message if no projects are saved */}
          {storageError ? (
            <p>Foutmelding</p>
          ): savedProjects.length === 0 ? (
          <p>Geen opgeslagen projecten</p>
        ) : (
          <table className="projects-table">
            <thead>
              <tr>
                <th>Functie</th>
                <th>Bedrijf</th>
                <th>Bekijk</th>
                <th>Actie</th>
              </tr>
            </thead>
            <tbody>
              {savedProjects.map((project) => (
                <tr key={project.id} className= "card projects-card">
                  <td>
                    <h2>{project.title}</h2>
                  </td>
                  <td>
                    <p>{project.companyName}</p>
                  </td>
                  <td>
                    {/* Details button*/}
                    <button onClick={() => handleDetials(project.id)} className="projects-details-button">Details
                    </button>
                  </td>
                  <td>
                    {/* Delete button removes project from saved list */}
                    <button
                      onClick={() => handleDelete(project.id)} className="projects-share-button">Verwijderen
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>
      </main>
    </>
  );
}

export default SavedProjects;
