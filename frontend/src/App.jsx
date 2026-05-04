import Home from './Home.jsx'
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard-layout">
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* Hier komen later de andere routes zoals /projects */}
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App
