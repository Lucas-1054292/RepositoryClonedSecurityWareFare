import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

function SavedProjects() {
  const [savedProjects, setSavedProjects] = useState([]);
  const navigate = useNavigate();

  const handleDetials =(id) => {
    navigate("/projects-details", {
      state: {listingId: id},
    });
  };

  // Load saved projects from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedProjects") || "[]"
    );
    setSavedProjects(saved);
    }, []);

  // Remove project from localStorage and update state
  const handleDelete = (id) => {const newList = savedProjects.filter((project) => project.id !== id
    );
    localStorage.setItem("savedProjects", JSON.stringify(newList));
    setSavedProjects(newList);
  };

  return (
    <>
      {/* Header */}
      <header className="dashboard-header">
        <h1>Opgeslagen Projecten</h1>
        <p>Hieronder vindt u uw projecten die zijn opgeslagen.</p>
      </header>

      <main style={{padding: "1.25rem"}}>
        {/* Show message if no projects are saved */}
        {savedProjects.length === 0 ? (
          <p>Geen opgeslagen projecten</p>
        ) : (
          <table className="projects-table">
            <thead>
              <tr>
                <th>Functie</th>
                <th>Bedrijf</th>
                <th>Actie</th>
              </tr>
            </thead>
            <tbody>
              {savedProjects.map((project) => (
                <tr key={project.id}>
                  <td className="saved-card-text">
                    <h2>{project.title}</h2>
                  </td>
                  <td className="saved-card-text">
                    <p>{project.companyName}</p>
                  </td>
                  <td>
                    {/* Details button*/}
                    <button  onClick={() => handleDetials(project.id)} className="projects-details-button">Details
                    </button>
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
      </main>
    </>
  );
}

export default SavedProjects;
