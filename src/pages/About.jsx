import React from 'react';
import ciac from '../assets/Sobhani.jpeg';
import { FaFacebook, FaLinkedin, FaGlobe } from 'react-icons/fa';  // For social media icons

function About() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Introduction Section */}
      <section className="p-12 bg-orange-600 text-white text-center">
        <h1 className="text-4xl font-bold mb-6">Students' International Affairs Society</h1>
        <p className="text-xl leading-relaxed max-w-4xl mx-auto">
          The Students' International Affairs Society (SIAS) is a dynamic student platform under the Excellency of Centre for International Affairs and Cooperation (CIAC, UIU).
          SIAS works to empower students of United International University by providing international platforms, aiming to shape them into "Globally Competent Students."
        </p>
      </section>

      {/* CIAC Director */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-black mb-8">CIAC Director</h2>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <img className="w-32 h-32 rounded-full mx-auto mb-4" src={ciac} alt="Dr. John Doe" />
          <h3 className="text-2xl font-extrabold text-black">Dr. Farid Ahammad Sobhani</h3>
          <p className="text-gray-700 text-lg">Professor. SoBE & Director, CIAC</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
              <FaGlobe size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Advisor Panel */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-black mb-8">Advisor Panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Prof. Alice Smith" />
            <h3 className="text-2xl font-extrabold text-black">Prof. Alice Smith</h3>
            <p className="text-gray-600">Academic Advisor</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Dr. Bob Lee" />
            <h3 className="text-2xl font-extrabold text-black">Dr. Bob Lee</h3>
            <p className="text-gray-600">International Relations Advisor</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Jordan Belford" />
            <h3 className="text-2xl font-extrabold text-black">Jordan Belford</h3>
            <p className="text-gray-600">Academic Advisor</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Committee Panel */}
      <section className="p-12 bg-orange-100 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-8">Presidential Panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Md Siam Hossain" />
            <h3 className="text-2xl font-extrabold text-black">Md Siam Hossain</h3>
            <p className="text-gray-600">President</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="John Doe" />
            <h3 className="text-2xl font-extrabold text-black">John Doe</h3>
            <p className="text-gray-600">Vice President</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Emily Davis" />
            <h3 className="text-2xl font-extrabold text-black">Emily Davis</h3>
            <p className="text-gray-600">General Secretary</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Secretary Panel */}
      <section className="p-12 bg-orange-100 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-8">Secretary Panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Md Zishan Showdagor" />
            <h3 className="text-2xl font-extrabold text-black">Md Zishan Showdagor</h3>
            <p className="text-gray-600">Secretary of PR & Media</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Jane Smith" />
            <h3 className="text-2xl font-extrabold text-black">Jane Smith</h3>
            <p className="text-gray-600">Secretary of Events</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Rohan Jabed" />
            <h3 className="text-2xl font-extrabold text-black">Rohan Jabed</h3>
            <p className="text-gray-600">Secretary of Logistics</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Panel */}
      <section className="p-12 bg-orange-100 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-8">Executive Panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Sarah Ahmed" />
            <h3 className="text-2xl font-extrabold text-black">Sarah Ahmed</h3>
            <p className="text-gray-600">Executive Member</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Ali Rahman" />
            <h3 className="text-2xl font-extrabold text-black">Ali Rahman</h3>
            <p className="text-gray-600">Executive Member</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Fatima Noor" />
            <h3 className="text-2xl font-extrabold text-black">Fatima Noor</h3>
            <p className="text-gray-600">Executive Member</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6">SIAS Notable Alumni</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Shamsul Huda" />
            <h3 className="text-2xl font-extrabold text-black">Shamsul Huda</h3>
            <p className="text-gray-600">Alumni, Former President</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Niaj Ahmed" />
            <h3 className="text-2xl font-extrabold text-black">Niaj Ahmed</h3>
            <p className="text-gray-600">Alumni, Former Secretary</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-32 h-32 rounded-full mx-auto mb-4" src="path-to-image" alt="Nusrat Jahan" />
            <h3 className="text-2xl font-extrabold text-black">Nusrat Jahan</h3>
            <p className="text-gray-600">Alumni, Former Secretary</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
       {/* Featured Events */}
       <section className="p-12 bg-white text-center">
        <h2 className="text-4xl font-extrabold mb-6">Featured Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-600">Global Education Fair</h3>
            <p className="text-gray-600">An event that connects students with top universities around the world for study opportunities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-600">International Networking Night</h3>
            <p className="text-gray-600">A networking event for students to meet global academic and industry leaders.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-600">Cultural Exchange Program</h3>
            <p className="text-gray-600">Promotes cultural understanding and builds global friendships through student exchange initiatives.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
