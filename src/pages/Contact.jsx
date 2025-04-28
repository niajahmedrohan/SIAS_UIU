import React from 'react';

function Contact() {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-16">
          Get in Touch
        </h1>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-md p-8 space-y-8">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Head Office</h2>
            <p className="text-gray-700">
              United International University (UIU) <br />
              United City, Madani Avenue, Badda, Dhaka 1212, Bangladesh
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Email</h2>
            <p className="text-gray-700">
              <a href="mailto:sias@uiu.ac.bd" className="text-orange-600 font-semibold">sias@uiu.ac.bd</a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Phone</h2>
            <p className="text-gray-700">+880 2 5509 2265</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Social Media</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold">
                  Facebook →
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold">
                  LinkedIn →
                </a>
              </li>
              <li>
                <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold">
                  Instagram →
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;
