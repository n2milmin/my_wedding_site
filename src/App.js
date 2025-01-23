import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import NavBar from './components/navBar.js';
import Footer from './components/footer.js';
// import RSVP from "./pages/RSVP";
// import Gallery from "./pages/Gallery.js/index.js";
// import Registry from  "./pages/Registry";
// import Itinerary from "./pages/Itinerary.js/index.js";
// import Acommidations from "./pages/Acommidations.js/index.js";


function App() {
  return (
    <Router className="App">
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/rsvp" element={<RSVP />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/registry" element={<Registry />} /> 
          <Route path="/itinerary" element={<Itinerary />} /> 
          <Route path="/acommidations-directions" element={<Acommidations />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
