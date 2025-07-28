// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 shadow-md rounded-lg">

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          {/* Call Box */}
          <div className="border p-6 rounded-lg shadow">
            <div className="flex items-center gap-4 mb-2">
              <img src="https://cdn-icons-png.flaticon.com/128/3059/3059442.png" alt="Call" className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Call To Us</h3>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p className="font-medium mt-2">Phone: +8801611112222</p>
          </div>

          {/* Email Box */}
          <div className="border p-6 rounded-lg shadow">
            <div className="flex items-center gap-4 mb-2">
              <img src="https://cdn-icons-png.flaticon.com/128/3059/3059590.png" alt="Mail" className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Write To Us</h3>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p className="mt-2">Emails: <br />
              <span className="font-medium">customer@exclusive.com</span><br />
              <span className="font-medium">support@exclusive.com</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="flex-1 border rounded px-4 py-2"
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="flex-1 border rounded px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Your Phone *"
              className="flex-1 border rounded px-4 py-2"
              required
            />
          </div>
          <textarea
            rows="6"
            placeholder="Your Message"
            className="border rounded px-4 py-2"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition w-fit self-end"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
