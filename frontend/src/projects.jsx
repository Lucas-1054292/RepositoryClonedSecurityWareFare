import React from "react";
import {Link} from "react-router-dom";

function Projects() {
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
            <tr className="card projects-card">
              <td><h2>Backend Developer</h2></td>
              <td><p>Bedrijfsnaam 1</p></td>
              <td>
                <button className="projects-details-button">Details</button>
              </td>
            </tr>

            <tr className="card projects-card">
              <td><h2>Fullstack Developer</h2></td>
              <td><p>Bedrijfsnaam 1</p></td>
              <td>
                <button className="projects-details-button">Details</button>
              </td>
            </tr>

            <tr className="card projects-card">
              <td><h2>Backend Developer</h2></td>
              <td><p>Bedrijfsnaam 2</p></td>
              <td>
                <button className="projects-details-button">Details</button>
              </td>
            </tr>

            <tr className="card projects-card">
              <td><h2>Fullstack Developer</h2></td>
              <td><p>Bedrijfsnaam 2</p></td>
              <td>
                <button className="projects-details-button">Details</button>
              </td>
            </tr>

            <tr className="card projects-card">
              <td><h2>Backend Developer</h2></td>
              <td><p>Bedrijfsnaam 3</p></td>
              <td>
                <button className="projects-details-button">Details</button>
              </td>
            </tr>

            <tr className="card projects-card">
              <td><h2>Fullstack Developer</h2></td>
              <td><p>Bedrijfsnaam 3</p></td>
              <td>
                <button className="projects-details-button">Details</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </main>
    </>
  )
}

export default Projects;

