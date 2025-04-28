// Contact.jsx

import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">If you have any questions, feel free to reach out to us.</p>
      <form className="space-y-4">
        <div>
          <label className="block text-lg">Name:</label>
          <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-lg">Email:</label>
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
