import React from 'react';

// Sample News Data
const newsItems = [
  {
    title: 'SIAS-UIU Wins International Research Award',
    description: 'The SIAS-UIU research team secured 1st place at the Global Research Conference 2025.',
    date: 'April 20, 2025',
    category: 'Achievement',
  },
  {
    title: 'New Scholarship Programs Announced',
    description: 'SIAS-UIU introduces 5 new international scholarship opportunities for 2025 admissions.',
    date: 'April 15, 2025',
    category: 'Scholarship',
  },
  {
    title: 'Upcoming Webinar on Study Abroad',
    description: 'Join our webinar to learn about studying in Australia, Canada, and the UK.',
    date: 'April 10, 2025',
    category: 'Event',
  },
];

function News() {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-16">
          News & Updates
        </h1>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-orange-600 font-semibold uppercase">{news.category}</span>
                <span className="text-sm text-gray-500">{news.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {news.title}
              </h2>
              <p className="text-gray-700 mb-6">{news.description}</p>
              <button className="text-orange-600 font-semibold flex items-center gap-1">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
