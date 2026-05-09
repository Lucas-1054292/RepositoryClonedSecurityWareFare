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
            <article className="card projects-card">
              <h2>Bedrijfsnaam 1</h2>
              <p>Wij zijn abc</p>
              <button className="projects-details-button">Details</button>
            </article>

            <article className="card projects-card">
              <h2>Bedrijfsnaam 2</h2>
              <p>Wij zijn xyz</p>
              <button className="projects-details-button">Details</button>
            </article>
          </div>
        </main>
    </>
  )
}

export default Projects;

