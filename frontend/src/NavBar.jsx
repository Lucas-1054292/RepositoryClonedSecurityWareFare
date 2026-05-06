import React  from "react";
import {useState, useEffect} from "react";
import informationImg from './assets/Information.svg';
import homeImg from './assets/Home.svg';
import projectsImg from './assets/Projects.svg';
import { Link } from 'react-router-dom';
import logoImg from './assets/rac.png'


function NavBar() {
  const[isExpanded, setIsExpanded] = useState(false);


  useEffect(() => {
    if (isExpanded){
      document.body.classList.add('sb-expand');
    }else{
      document.body.classList.remove('sb-expand');
    }
  },[isExpanded]);
  const toggleSidebar = () =>{
    setIsExpanded(!isExpanded);
  };

  return (
      <aside className= "dashboard-sidebar">

        <div className="logo">
          <img src={logoImg} alt="logo"/>
          </div>
        <button type="button" id="resize" onClick={toggleSidebar}>
          &#9776;
        </button>

        <nav className="sidebar_navigation">
      <ul>
        <li>
          <Link to= "/" className='nav-item'>
            <img src={homeImg} alt="home"/>
            <span className="title">Home</span>
            </Link>
        </li>

        <li>
          <Link to= "/projects" className='nav-item'>
            <img src={projectsImg} alt="projects"/>
            <span className="title">Projecten</span>
            </Link>
        </li>

        <li>
          <Link to= "/Information" className='nav-item' >
            <img src={informationImg} alt=""/>
            <span className="title">Informatie</span>
            </Link>
        </li>
      </ul>
    </nav>
      </aside>

    );
  }
export default NavBar;

