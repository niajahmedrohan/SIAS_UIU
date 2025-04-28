import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

// Sample data for events, scholarships, and alumni (can be replaced with dynamic data from an API or database)
const events = [
  { title: 'Scholarship Workshop', date: 'May 5, 2025', description: 'Learn how to apply for scholarships abroad.' },
  { title: 'Alumni Networking Event', date: 'June 12, 2025', description: 'Meet and network with SIAS-UIU alumni.' },
  { title: 'Alumni Networking Event', date: 'June 12, 2025', description: 'Meet and network with SIAS-UIU alumni.' },
];

const scholarships = [
  { name: 'Masters Scholarship in USA', description: 'Full funding for masters in any field.' },
  { name: 'PhD Scholarship in Europe', description: 'PhD funding in environmental sciences.' },
  { name: 'Opportunity in Australia', description: 'PhD funding in environmental sciences.' },
];

const alumni = [
  { name: 'John Doe', job: 'Software Engineer at Google', testimonial: 'SIAS-UIU gave me the right tools and network to succeed in my career.' },
  { name: 'Jane Smith', job: 'Marketing Director at Nike', testimonial: 'Thanks to SIAS-UIU, I found valuable mentorship and career guidance.' },
  { name: 'Jane Smith', job: 'Marketing Director at Nike', testimonial: 'Thanks to SIAS-UIU, I found valuable mentorship and career guidance.' },
];

function Home() {
  return (
    <div className="overflow-hidden bg-white text-black">
      {/* Hero Section */}
      <Hero />

      {/* Scholarships Section */}
      <section className="py-20 bg-orange-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">Global Scholarship Opportunities</h2>
          <p className="text-lg max-w-3xl mx-auto text-black">
            Unlock your potential with prestigious scholarships around the world. Take the first step towards your academic future.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
              <h3 className="text-2xl font-bold text-black mb-2">{scholarship.name}</h3>
              <p className="text-black mb-4">{scholarship.description}</p>
              <Link to="/scholarships" className="text-orange-600 hover:underline mt-4 block">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">Alumni Success Stories</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {alumni.map((person, index) => (
            <div key={index} className="bg-black text-white p-6 rounded-lg shadow-lg max-w-xs hover:transform hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-2">{person.name}</h3>
              <p className="text-lg">{person.job}</p>
              <p className="mt-4 text-orange-400">"{person.testimonial}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <h2 className="text-4xl font-extrabold mb-4">Student Resources & Tools</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Access valuable resources that will help you with scholarship applications, career planning, and more to make your academic journey easier.
        </p>
        <Link to="/resources" className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition duration-300">
          Explore Resources
        </Link>
      </section>

      {/* Events Section */}
      <section className="py-20 px-6 bg-orange-100">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">Upcoming Events & Workshops</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
              <h3 className="text-2xl font-bold text-black">{event.title}</h3>
              <p className="text-black">{event.date}</p>
              <p className="mt-4 text-black">{event.description}</p>
              <Link to="/events" className="text-orange-600 hover:underline mt-4 block">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 text-center bg-black text-white">
        <h2 className="text-4xl font-extrabold mb-4">About SIAS-UIU</h2>
        <p className="text-lg max-w-4xl mx-auto mb-8">
          SIAS-UIU is committed to supporting students at UIU by connecting them with global scholarship opportunities, career advice, and a thriving alumni network.
        </p>
        <Link to="/about" className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition duration-300">
          Learn More
        </Link>
      </section>
    </div>
  );
}

export default Home;
