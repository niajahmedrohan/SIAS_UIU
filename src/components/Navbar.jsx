import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // for hamburger icons (install lucide-react or use your own icons)
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-600 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="SIAS-UIU Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white px-2 hover:underline">Home</Link>
          <Link to="/about" className="text-white px-2 hover:underline">About</Link>
          <Link to="/scholarships" className="text-white px-2 hover:underline">Scholarships</Link>
          <Link to="/alumni" className="text-white px-2 hover:underline">Alumni</Link>
          <Link to="/events" className="text-white px-2 hover:underline">Events</Link>
          <Link to="/news" className="text-white px-2 hover:underline">News</Link>
          <Link to="/resources" className="text-white px-2 hover:underline">Resources</Link>
          <Link to="/contact" className="text-white px-2 hover:underline">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-orange-600 px-4 pt-4 pb-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-white hover:underline">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-white hover:underline">About</Link>
          <Link to="/scholarships" onClick={() => setIsOpen(false)} className="block text-white hover:underline">Scholarships</Link>
          <Link to="/alumni" onClick={() => setIsOpen(false)} className="block text-white hover:underline">Alumni</Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className="block text-white hover:underline">Events</Link>
          <Link to="/news" onClick={() => setIsOpen(false)} className="block text-white hover:underline">News</Link>
          <Link to="/resources" onClick={() => setIsOpen(false)} className="block text-white hover:underline">Resources</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-white hover:underline">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
