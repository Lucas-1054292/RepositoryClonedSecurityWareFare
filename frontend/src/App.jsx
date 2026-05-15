import './base.css'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Projects from "./projects.jsx";
import ProjectDetails from "./project-details.jsx";
import {useState} from "react";


function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <BrowserRouter>
      <div className={`dashboard-layout ${isExpanded ? 'sb-expand' : ''}`}>
        <NavBar isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects-details" element={<ProjectDetails/>} />
            {/* Hier komen later de andere routes zoals /projects */}
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App
