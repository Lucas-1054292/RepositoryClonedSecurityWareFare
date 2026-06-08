import React from "react";
import {Link} from "react-router-dom";

function Home() {
  return (
    <>
      {/*header*/}
        <header className="dashboard-header">
         <h1>Welkom!</h1>
        </header>

        {/*main*/}
        <main className="dashboard-main">
            <Link to="/projects" className="card-link">
            <article className="card card-1">
                <h2>Projecten</h2>
            </article>
            </Link>

            <Link to="/saved-projects" className="card-link">
            <article className="card card-2">
                <h2>Opgeslagen</h2>
            </article>
            </Link>
        </main>
    </>
  )
}

export default Home;
