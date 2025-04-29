import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { FaFacebook, FaLinkedin, FaGlobe, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'; 

// Sample alumni data with Bengali names and other details
const alumniData = [
  {
    name: 'Adnan Borshon',
    photo: 'https://placekitten.com/200/200', 
    education: 'B.Sc. Computer Science',
    currentJob: 'Software Engineer at Google',
    location: 'San Francisco, USA',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
    portfolio: 'https://johndoe.com',
    facebook: 'https://www.facebook.com/johndoe',
    calendly: 'https://calendly.com/johndoe'
  },
  {
    name: 'Shamim Ara',
    photo: 'https://placekitten.com/200/200', 
    education: 'BBA Marketing',
    currentJob: 'Marketing Director at Nike',
    location: 'Portland, USA',
    linkedin: 'https://www.linkedin.com/in/janesmith/',
    portfolio: 'https://janesmith.com',
    facebook: 'https://www.facebook.com/janesmith',
    calendly: 'https://calendly.com/janesmith'
  },
  {
    name: 'Rashedul Islam',
    photo: 'https://placekitten.com/200/200',
    education: 'M.Sc. Data Science',
    currentJob: 'Data Scientist at Facebook',
    location: 'New York, USA',
    linkedin: 'https://www.linkedin.com/in/michaelbrown/',
    portfolio: 'https://michaelbrown.com',
    facebook: 'https://www.facebook.com/michaelbrown',
    calendly: 'https://calendly.com/michaelbrown'
  },
  {
    name: 'Nusrat Jahan',
    photo: 'https://placekitten.com/200/200',
    education: 'B.Sc. Electrical Engineering',
    currentJob: 'Electrical Engineer at Tesla',
    location: 'Los Angeles, USA',
    linkedin: 'https://www.linkedin.com/in/emilydavis/',
    portfolio: 'https://emilydavis.com',
    facebook: 'https://www.facebook.com/emilydavis',
    calendly: 'https://calendly.com/emilydavis'
  },
  {
    name: 'Kamrul Hasan',
    photo: 'https://placekitten.com/200/200',
    education: 'M.Sc. Architecture',
    currentJob: 'Architect at Zaha Hadid Architects',
    location: 'London, UK',
    linkedin: 'https://www.linkedin.com/in/daniellee/',
    portfolio: 'https://daniellee.com',
    facebook: 'https://www.facebook.com/daniellee',
    calendly: 'https://calendly.com/daniellee'
  },
  {
    name: 'Momena Sultana',
    photo: 'https://placekitten.com/200/200',
    education: 'B.A. Psychology',
    currentJob: 'Clinical Psychologist at BetterHelp',
    location: 'Toronto, Canada',
    linkedin: 'https://www.linkedin.com/in/oliviawilson/',
    portfolio: 'https://oliviawilson.com',
    facebook: 'https://www.facebook.com/oliviawilson',
    calendly: 'https://calendly.com/oliviawilson'
  },
  {
    name: 'Asif Ali',
    photo: 'https://placekitten.com/200/200',
    education: 'M.A. Business Administration',
    currentJob: 'CEO at Startup Inc.',
    location: 'Berlin, Germany',
    linkedin: 'https://www.linkedin.com/in/jamesanderson/',
    portfolio: 'https://jamesanderson.com',
    facebook: 'https://www.facebook.com/jamesanderson',
    calendly: 'https://calendly.com/jamesanderson'
  },
  {
    name: 'Tanzila Begum',
    photo: 'https://placekitten.com/200/200',
    education: 'Ph.D. Environmental Science',
    currentJob: 'Environmental Consultant at GreenTech',
    location: 'Madrid, Spain',
    linkedin: 'https://www.linkedin.com/in/sophiamartinez/',
    portfolio: 'https://sophiamartinez.com',
    facebook: 'https://www.facebook.com/sophiamartinez',
    calendly: 'https://calendly.com/sophiamartinez'
  },
  {
    name: 'Abdul Kadir',
    photo: 'https://placekitten.com/200/200',
    education: 'B.A. Journalism',
    currentJob: 'Journalist at The New York Times',
    location: 'Chicago, USA',
    linkedin: 'https://www.linkedin.com/in/williamthomas/',
    portfolio: 'https://williamthomas.com',
    facebook: 'https://www.facebook.com/williamthomas',
    calendly: 'https://calendly.com/williamthomas'
  },
  {
    name: 'Ruma Sultana',
    photo: 'https://placekitten.com/200/200',
    education: 'M.Sc. Mechanical Engineering',
    currentJob: 'Product Manager at Boeing',
    location: 'Seattle, USA',
    linkedin: 'https://www.linkedin.com/in/avataylor/',
    portfolio: 'https://avataylor.com',
    facebook: 'https://www.facebook.com/avataylor',
    calendly: 'https://calendly.com/avataylor'
  },
  {
    name: 'Riyad Chowdhury',
    photo: 'https://placekitten.com/200/200',
    education: 'B.Sc. Software Engineering',
    currentJob: 'Frontend Developer at Spotify',
    location: 'Berlin, Germany',
    linkedin: 'https://www.linkedin.com/in/masonharris/',
    portfolio: 'https://masonharris.com',
    facebook: 'https://www.facebook.com/masonharris',
    calendly: 'https://calendly.com/masonharris'
  },
  {
    name: 'Fatima Akter',
    photo: 'https://placekitten.com/200/200',
    education: 'M.A. Graphic Design',
    currentJob: 'Senior Designer at Adobe',
    location: 'San Francisco, USA',
    linkedin: 'https://www.linkedin.com/in/isabellaclark/',
    portfolio: 'https://isabellaclark.com',
    facebook: 'https://www.facebook.com/isabellaclark',
    calendly: 'https://calendly.com/isabellaclark'
  },
  {
    name: 'Sabbir Rahman',
    photo: 'https://placekitten.com/200/200',
    education: 'M.Sc. Civil Engineering',
    currentJob: 'Construction Manager at Bechtel',
    location: 'Sydney, Australia',
    linkedin: 'https://www.linkedin.com/in/liamrobinson/',
    portfolio: 'https://liamrobinson.com',
    facebook: 'https://www.facebook.com/liamrobinson',
    calendly: 'https://calendly.com/liamrobinson'
  },
  {
    name: 'Sharmin Jahan',
    photo: 'https://placekitten.com/200/200',
    education: 'B.Sc. Accounting',
    currentJob: 'Senior Accountant at PwC',
    location: 'London, UK',
    linkedin: 'https://www.linkedin.com/in/charlotteyoung/',
    portfolio: 'https://charlotteyoung.com',
    facebook: 'https://www.facebook.com/charlotteyoung',
    calendly: 'https://calendly.com/charlotteyoung'
  }
];

function Alumni() {
  const [filter, setFilter] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const filteredAlumni = alumniData.filter(alumni => 
    alumni.education.toLowerCase().includes(filter) || 
    alumni.currentJob.toLowerCase().includes(filter)
  );

  return (
    <div className="bg-white text-black">
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Meet Our Alumni</h2>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filter by Education or Job"
          className="px-4 py-2 border rounded-lg w-1/2 mb-10"
        />
        
        {/* Alumni List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlumni.map((alumni, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src={alumni.photo} alt={alumni.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-black">{alumni.name}</h3>
              <p className="text-lg text-black mb-2">{alumni.education}</p>
              <p className="text-lg text-black mb-4">{alumni.currentJob}</p>
              <p className="text-lg text-black mb-4 flex items-center justify-center gap-2">
  <FaMapMarkerAlt size={18} color="gray" />
  {alumni.location}
</p>

              <div className="flex items-center justify-center gap-4">
                <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" lassName="text-gray-600 hover:underline">
                  <FaLinkedin size={24} color="gray" />
                </a>
                <a href={alumni.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">
                  <FaGlobe size={24} color="gray" />
                </a>
                <a href={alumni.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">
                  <FaFacebook size={24} color="gray" />
                </a>
                <a href={alumni.calendly} target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
                  Book Appointment
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add Alumni Button */}
        <div className="mt-8">
          <button 
            onClick={handleModalToggle} 
            className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition">
            Add Your Profile
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-1/3">
              <h2 className="text-2xl font-semibold text-center mb-6">Add Your Profile</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="education" className="block text-lg mb-2">Education</label>
                  <input type="text" id="education" className="w-full px-4 py-2 border rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="currentJob" className="block text-lg mb-2">Current Job</label>
                  <input type="text" id="currentJob" className="w-full px-4 py-2 border rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="location" className="block text-lg mb-2">Location</label>
                  <input type="text" id="location" className="w-full px-4 py-2 border rounded-lg" required />
                </div>
                <div className="flex justify-between">
                  <button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition">Submit</button>
                  <button type="button" onClick={handleModalToggle} className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-500 transition">Close</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Alumni;
