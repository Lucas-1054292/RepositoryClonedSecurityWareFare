import './base.css'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Projects from "./projects.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard-layout">
        <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            {/* Hier komen later de andere routes zoals /projects */}
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App
