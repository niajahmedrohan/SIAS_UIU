import React, { useState } from 'react';

function Scholarships() {
  const scholarships = [
    { 
      title: "Erasmus Mundus Joint Masters", 
      description: "Funded Master's in Europe covering tuition, travel, and living costs.", 
      fullDetails: "The Erasmus Mundus Joint Masters is a prestigious program that offers full funding for students to study in top universities across Europe. It covers tuition, travel, and living costs, and is open to students worldwide.",
      location: "Europe",
      level: "Master's",
      icon: "🌍" // Example icon
    },
    { 
      title: "Fulbright Scholarship", 
      description: "Fully funded Master's and PhD programs in the USA.", 
      fullDetails: "The Fulbright Scholarship program provides full funding for international students to pursue Master's and PhD programs in the USA. It promotes mutual understanding and cultural exchange between countries.",
      location: "USA",
      level: "Master's & PhD",
      icon: "🇺🇸" // Example icon
    },
    { 
      title: "DAAD Scholarships", 
      description: "German government scholarships for Master's and PhD programs.", 
      fullDetails: "The DAAD Scholarship program is a German government initiative to support international students pursuing Master's and PhD programs in Germany. It includes funding for tuition, travel, and living expenses.",
      location: "Germany",
      level: "Master's & PhD",
      icon: "🇩🇪" // Example icon
    },
    {
      title: "Chevening Scholarship",
      description: "UK Government scholarships for Master's programs.",
      fullDetails: "Chevening Scholarships offer full funding to international students for one-year Master's programs at UK universities. They are awarded based on leadership potential and academic excellence.",
      location: "UK",
      level: "Master's",
      icon: "🇬🇧" // Example icon
    },
    {
      title: "Rhodes Scholarship",
      description: "Full funding for graduate studies at Oxford University.",
      fullDetails: "The Rhodes Scholarship is one of the most prestigious international awards, providing full funding for graduate studies at Oxford University. It is awarded to exceptional students based on academic excellence, leadership, and character.",
      location: "UK",
      level: "Graduate",
      icon: "🏫" // Example icon
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  // Filter scholarships based on search term
  const filteredScholarships = scholarships.filter(scholarship =>
    scholarship.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Scholarship Opportunities</h1>
      
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input 
          type="text" 
          placeholder="Search scholarships..." 
          className="border-2 border-gray-300 rounded-md p-2 w-1/3" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      {/* Scholarship List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredScholarships.map((scholarship, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-md transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">{scholarship.icon}</span>
              <h3 className="text-2xl font-semibold">{scholarship.title}</h3>
            </div>
            <p className="text-gray-600 mb-2">{scholarship.description}</p>
            
            {/* Scholarship Information */}
            <div className="mb-4 text-sm text-gray-500">
              <p><strong>Level:</strong> {scholarship.level}</p>
              <p><strong>Location:</strong> {scholarship.location}</p>
            </div>
            
            {/* Accordion for Full Details */}
            <button 
              onClick={() => setSelectedScholarship(selectedScholarship === index ? null : index)}
              className="text-orange-600 mt-4 w-full py-2 rounded-md border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition"
            >
              {selectedScholarship === index ? 'Hide Details' : 'View Full Details'}
            </button>

            {/* Full Details */}
            {selectedScholarship === index && (
              <div className="mt-4 text-gray-700 text-sm">
                <p>{scholarship.fullDetails}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scholarships;
