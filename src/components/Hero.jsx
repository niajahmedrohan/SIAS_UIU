import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-orange-600 text-white py-32 text-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Unlock Global Opportunities
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Explore worldwide scholarships, connect with successful alumni, and unlock endless academic opportunities with SIAS-UIU.
        </p>
        <div className="flex justify-center gap-6">
          <Link to="/scholarships" className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Explore Scholarships
          </Link>
          <Link to="/alumni" className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Meet Alumni
          </Link>
        </div>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}

export default Hero;
