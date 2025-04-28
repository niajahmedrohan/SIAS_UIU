import React from 'react';

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
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">CIAC Director</h2>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-extrabold text-black">Dr. John Doe</h3>
          <p className="text-gray-700 text-lg">Director, Centre for International Affairs and Cooperation (CIAC)</p>
          <p className="mt-4 text-gray-700">
            Dr. John Doe is a renowned academic leader with a strong passion for global education and student empowerment. Under his leadership, SIAS has become a key player in enhancing students’ international exposure.
          </p>
        </div>
      </section>

      {/* Advisor Panel */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">Advisor Panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Prof. Alice Smith</h3>
            <p className="text-gray-600">Academic Advisor</p>
            <p className="mt-4 text-gray-700">Prof. Alice Smith is a distinguished academician and an advocate for global student mobility.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Dr. Bob Lee</h3>
            <p className="text-gray-600">International Relations Advisor</p>
            <p className="mt-4 text-gray-700">Dr. Bob Lee is an expert in international relations, working closely with SIAS to facilitate global partnerships.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Jordan Belford</h3>
            <p className="text-gray-600">Academic Advisor</p>
            <p className="mt-4 text-gray-700">Prof. Alice Smith is a distinguished academician and an advocate for global student mobility.</p>
          </div>
        </div>
      </section>

      {/* Core Committee Panel */}
      <section className="p-12 bg-orange-100 text-center">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">Core Committee Panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Md Siam Hossain</h3>
            <p className="text-gray-600">President</p>
            <p className="mt-4 text-gray-700">A passionate leader working towards enhancing SIAS’s international engagement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">John Doe</h3>
            <p className="text-gray-600">Vice President</p>
            <p className="mt-4 text-gray-700">Focused on establishing strong networks between students and global institutions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Md Siam Hossain</h3>
            <p className="text-gray-600">President</p>
            <p className="mt-4 text-gray-700">A passionate leader working towards enhancing SIAS’s international engagement.</p>
          </div>
        </div>
      </section>

      {/* Secretary Panel */}
      <section className="p-12 bg-orange-100 text-center">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">Secretary Panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Md Zishan Showdagor</h3>
            <p className="text-gray-600">Secretary of PR & Media</p>
            <p className="mt-4 text-gray-700">Leading media relations and content creation for SIAS, ensuring effective communication with external stakeholders.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Jane Smith</h3>
            <p className="text-gray-600">Secretary of Events</p>
            <p className="mt-4 text-gray-700">Responsible for organizing and coordinating key international events under the guidance of CIAC.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Rohan Jabed</h3>
            <p className="text-gray-600">Secretary of Events</p>
            <p className="mt-4 text-gray-700">Responsible for organizing and coordinating key international events under the guidance of CIAC.</p>
          </div>
        </div>
      </section>

      {/* Executive Panel */}
      <section className="p-12 bg-orange-100 text-center">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">Executive Panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Sarah Ahmed</h3>
            <p className="text-gray-600">Executive Member</p>
            <p className="mt-4 text-gray-700">An active member involved in international student outreach and partnership building.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Ali Rahman</h3>
            <p className="text-gray-600">Executive Member</p>
            <p className="mt-4 text-gray-700">Focused on creating international learning opportunities for UIU students.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Sarah Ahmed</h3>
            <p className="text-gray-600">Executive Member</p>
            <p className="mt-4 text-gray-700">An active member involved in international student outreach and partnership building.</p>
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6">SIAS Notable Alumni</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Shamsul Huda</h3>
            <p className="text-gray-600">Alumni, Former President</p>
            <p className="mt-4 text-gray-700">Shamsul Huda has successfully represented SIAS at multiple international student conferences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Niaj Ahmed</h3>
            <p className="text-gray-600">Alumni, Former Secretary</p>
            <p className="mt-4 text-gray-700">A leader in international education, Nusrat now works with global education networks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold text-black">Nusrat Jahan</h3>
            <p className="text-gray-600">Alumni, Former Secretary</p>
            <p className="mt-4 text-gray-700">A leader in international education, Nusrat now works with global education networks.</p>
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
            <p className="text-gray-600">A networking event to help students build relationships with international professionals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-600">Global Education Fair</h3>
            <p className="text-gray-600">An event that connects students with top universities around the world for study opportunities.</p>
          </div>
        </div>
        
      </section>

    </div>
  );
}

export default About;
