import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Experience from './components/pages/Experience';
import Service from './components/pages/Services';
import Contact from './components/pages/Contact';
import { Resume } from './components/pages/Resume';

function App() {
  return (
    <Router>
      <div className='bg-black'>
        <NavTabs />
        <div className='vh-100'>
          
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="experience" element={<Experience />} />
          <Route path="service" element={<Service />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
          <Route path='resume' element ={<Resume />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

