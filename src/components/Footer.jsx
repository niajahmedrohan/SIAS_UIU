import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-5 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">SIAS-UIU</h2>
          <p className="text-gray-400">
            Students' International Affairs Society (SIAS) at United International University (UIU) works to guide and inform students about scholarships for Masters and PhD programs abroad, and fosters alumni-student networking for global success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Quick Links</h2>
          <ul className="text-gray-400 space-y-2">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/alumni" className="hover:text-orange-400">Alumni</Link></li>
            <li><Link to="/scholarships" className="hover:text-orange-400">Scholarships</Link></li>
            <li><Link to="/events" className="hover:text-orange-400">Events</Link></li>
            <li><Link to="/news" className="hover:text-orange-400">News</Link></li>
            <li><Link to="/resources" className="hover:text-orange-400">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Connect With Us</h2>
          <p className="text-gray-400 mb-2">Email: <a href="mailto:sias@uiu.ac.bd" className="hover:text-orange-400">sias@uiu.ac.bd</a></p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-400 text-2xl"><FaLinkedin /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-400 text-2xl"><FaFacebook /></a>
            <a href="https://www.uiu.ac.bd" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-400 text-2xl"><FaGlobe /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Students' International Affairs Society (SIAS-UIU). All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;