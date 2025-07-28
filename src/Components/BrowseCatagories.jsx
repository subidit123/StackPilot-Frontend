import React from 'react';
import { FaMobileAlt, FaLaptop, FaHeadphones, FaGamepad, FaCamera, FaClock } from 'react-icons/fa';

const categories = [
  { name: 'Phones', icon: <FaMobileAlt /> },
  { name: 'Computers', icon: <FaLaptop /> },
  { name: 'SmartWatch', icon: <FaClock /> },
  { name: 'Camera', icon: <FaCamera /> },
  { name: 'HeadPhones', icon: <FaHeadphones /> },
  { name: 'Gaming', icon: <FaGamepad /> },
];

const BrowseCategories = () => {
  return (
    <section className="px-4 md:px-20 py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Browse By Category</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-md hover:bg-red-100 cursor-pointer transition"
          >
            <div className="text-2xl text-red-500 mb-2">{item.icon}</div>
            <p className="text-sm font-medium text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
