import React  from "react";
import informationImg from './assets/Information.svg';
import homeImg from './assets/Home.svg';
import projectsImg from './assets/Projects.svg';
import { Link } from 'react-router-dom';
import logoImg from './assets/rac.png'


function NavBar({isExpanded, setIsExpanded}) {

  const toggleSidebar = () =>{
    setIsExpanded(!isExpanded);
  };

  return (
      <aside className= "dashboard-sidebar">

        <div className="logo">
          <img src={logoImg} alt=""/>
          </div>
        <button type="button" id="resize" onClick={toggleSidebar}>
          &#9776;
        </button>

        <nav className="sidebar_navigation">
      <ul>
        <li>
          <Link to= "/" className='nav-item' aria-label="Home">
            <img src={homeImg} alt=""/>
            <span className="title">Home</span>
            </Link>
        </li>

        <li>
          <Link to= "/projects" className='nav-item' aria-label="Projecten">
            <img src={projectsImg} alt=""/>
            <span className="title">Projecten</span>
            </Link>
        </li>

        <li>
          <Link to= "/saved-projects" className='nav-item' aria-label="Opgeslagen">
            <img src={informationImg} alt=""/>
            <span className="title">Opgeslagen</span>
            </Link>
        </li>
      </ul>
    </nav>
      </aside>

    );
  }
export default NavBar;

