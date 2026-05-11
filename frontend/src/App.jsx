import './base.css'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard-layout">
        <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* here will come the routes like /projects */}
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App
