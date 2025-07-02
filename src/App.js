import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import NavBarComponent from './components/navBar.js';
import Footer from './components/footer.js';
import RSVP from "./pages/RSVP.js";
import Gallery from "./pages/Gallery.js";
// import Registry from  "./pages/Registry";
import Details from "./pages/Details.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className='App'>
        <NavBarComponent />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/registry" element={<Registry />} />  */}
            <Route path="/details" element={<Details />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
