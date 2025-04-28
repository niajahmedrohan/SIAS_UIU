import React from 'react';

// Sample Resource Data
const resources = [
  {
    title: 'Scholarship Application Guide',
    description: 'Step-by-step instructions for applying to global scholarships.',
    link: '/guides/scholarships',
  },
  {
    title: 'Resume & Cover Letter Templates',
    description: 'Professional templates to boost your job and scholarship applications.',
    link: '/resources/resumes',
  },
  {
    title: 'Interview Preparation Kit',
    description: 'Get ready for scholarship and job interviews with expert tips and sample questions.',
    link: '/resources/interview-tips',
  },
];

// University Tools Data
const universityTools = [
  {
    title: 'CGPA Calculator',
    description: 'Access your courses, results, and academic services.',
    url: 'https://studentportal.uiu.ac.bd',
  },
  {
    title: 'Question Bank',
    description: 'Explore thousands of books, journals, and online research materials.',
    url: 'https://library.uiu.ac.bd',
  },
  {
    title: 'Career Services',
    description: 'Get career counseling, job postings, and internship support.',
    url: 'https://career.uiu.ac.bd',
  },
];

function Resources() {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-16">
          Resources & University Tools
        </h1>

        {/* General Resources */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{resource.title}</h3>
                <p className="text-gray-700 mb-4">{resource.description}</p>
                <a href={resource.link} className="text-orange-600 font-semibold block">
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* University Tools */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">University Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universityTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{tool.title}</h3>
                <p className="text-gray-700 mb-4">{tool.description}</p>
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold block">
                  Visit →
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Resources;
