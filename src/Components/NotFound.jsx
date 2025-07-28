// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-sm text-gray-500 mb-2">Home / 404 Error</h2>
      <h1 className="text-5xl font-bold mb-4">404 Not Found</h1>
      <p className="text-gray-600 mb-6">Your visited page not found. You may go home page.</p>
      <Link to="/" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
