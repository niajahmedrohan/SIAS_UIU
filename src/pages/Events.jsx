import React from 'react';

// Sample Data: Upcoming and Past Events
const upcomingEvents = [
  { title: 'Scholarship Workshop', date: 'May 5, 2025', description: 'Learn how to apply for scholarships abroad with expert guidance.' },
  { title: 'Alumni Networking Meet', date: 'June 12, 2025', description: 'Connect with SIAS-UIU alumni to explore career opportunities and mentorship.' },
  { title: 'Scholarship Workshop', date: 'May 5, 2025', description: 'Learn how to apply for scholarships abroad with expert guidance.' },
];

const pastEvents = [
  { title: 'International Conference on Education', date: 'March 10, 2025', description: 'Discuss the future of education with global thought leaders.' },
  { title: 'UIU Career Fair', date: 'February 25, 2025', description: 'An event to help students meet top recruiters from various industries.' },
  { title: 'International Conference on Education', date: 'March 10, 2025', description: 'Discuss the future of education with global thought leaders.' },
];

function Events() {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Upcoming Events Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-12">Upcoming Events</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl font-semibold text-black mb-4">{event.title}</h3>
              <p className="text-lg text-gray-700 mb-4"><strong>Date:</strong> {event.date}</p>
              <p className="text-black mb-6">{event.description}</p>
              <a href="#register" className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition duration-300 block text-center">
                Register Now
              </a>
            </div>
          ))}
        </div>

        {/* Past Events Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-600 mb-12">Past Events</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl font-semibold text-black mb-4">{event.title}</h3>
              <p className="text-lg text-gray-700 mb-4"><strong>Date:</strong> {event.date}</p>
              <p className="text-black mb-6">{event.description}</p>
              <span className="text-gray-500 text-sm">Event has passed</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
