import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-orange-600 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-white text-xl font-bold">SIAS-UIU</Link>
        <div>
          <Link to="/" className="text-white px-4 hover:underline">Home</Link>
          <Link to="/about" className="text-white px-4 hover:underline">About</Link>
          <Link to="/scholarships" className="text-white px-4 hover:underline">Scholarships</Link>
          <Link to="/alumni" className="text-white px-4 hover:underline">Alumni</Link>
          <Link to="/events" className="text-white px-4 hover:underline">Events</Link>
          <Link to="/news" className="text-white px-4 hover:underline">News</Link>
          <Link to="/resources" className="text-white px-4 hover:underline">Resources</Link>
          <Link to="/contact" className="text-white px-4 hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;