// App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

// Importing pages
import Home from './pages/Home';
import About from './pages/About';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';
import Events from './pages/Events';
import News from './pages/News';
import Resources from './pages/Resources';
import Scholarships from './pages/Scholarships';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/scholarships" element={<Scholarships />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
