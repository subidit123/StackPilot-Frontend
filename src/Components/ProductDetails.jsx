import React, { useState } from 'react';

// Main App component
const App = () => {
  // Sample product data
  const product = {
    name: 'HAVIT HV-G92 Gamepad',
    price: 192.00,
    originalPrice: 200.00,
    discount: '40%',
    description: 'PlayStation 5 DualSense Wireless Controller. Experience a new level of immersion with the DualSense wireless controller. Featuring haptic feedback, adaptive triggers, and a built-in microphone, it\'s designed to enhance your gaming experience.',
    images: [
      'https://placehold.co/600x400/E0E0E0/FFFFFF?text=Main+Product',
      'https://placehold.co/100x100/D0D0D0/FFFFFF?text=Thumb+1',
      'https://placehold.co/100x100/C0C0C0/FFFFFF?text=Thumb+2',
      'https://placehold.co/100x100/B0B0B0/FFFFFF?text=Thumb+3',
      'https://placehold.co/100x100/A0A0A0/FFFFFF?text=Thumb+4',
    ],
    reviews: 88,
    stock: 15,
  };

  // Sample related products data
  const relatedProducts = [
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      price: 120.00,
      image: 'https://placehold.co/200x200/FF0000/FFFFFF?text=Related+1',
      rating: 5,
      reviews: 88,
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      price: 960.00,
      image: 'https://placehold.co/200x200/00FF00/FFFFFF?text=Related+2',
      rating: 4,
      reviews: 75,
    },
    {
      id: 3,
      name: 'IPS LCD Gaming Monitor',
      price: 370.00,
      image: 'https://placehold.co/200x200/0000FF/FFFFFF?text=Related+3',
      rating: 4.5,
      reviews: 99,
    },
    {
      id: 4,
      name: 'RGB Liquid CPU Cooler',
      price: 160.00,
      image: 'https://placehold.co/200x200/FFFF00/000000?text=Related+4',
      rating: 5,
      reviews: 120,
    },
  ];

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  // Function to handle image clicks in the thumbnail gallery
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  // Function to decrease the quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // Function to increase the quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-xl ${
            i <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="w-full max-w-7xl flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg mb-8">
        <div className="text-2xl font-bold text-gray-800">Exclusive</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Sign Up
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="w-full max-w-7xl mb-8">
        <ol className="list-reset flex text-gray-700">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Account
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Gaming
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-500">HAVIT HV-G92 Gamepad</li>
        </ol>
      </nav>

      {/* Product Details Section */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-lg mb-12">
        {/* Product Image Gallery */}
        <div className="lg:w-1/2 flex flex-col md:flex-row gap-4 mb-6 lg:mb-0">
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto pb-2 md:pb-0">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === image ? 'border-red-500' : 'border-transparent'
                }`}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
          <div className="flex-grow flex justify-center items-center p-4 bg-gray-100 rounded-lg">
            <img
              src={mainImage}
              alt={product.name}
              className="max-w-full max-h-96 object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="lg:w-1/2 lg:pl-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center mb-4">
            <div className="flex">{renderStars(4)}</div> {/* Assuming 4 stars for this product */}
            <span className="text-gray-600 ml-2">({product.reviews} Reviews)</span>
            <span className="text-green-600 ml-4 font-medium">In Stock</span>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-4">
            ${product.price.toFixed(2)}
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          <hr className="my-6 border-gray-200" />

          {/* Colors (Placeholder) */}
          <div className="flex items-center mb-6">
            <span className="text-gray-700 font-medium mr-4">Colors:</span>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-transparent hover:border-gray-400 focus:outline-none focus:border-gray-400"></button>
              <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-400 focus:outline-none focus:border-gray-400"></button>
            </div>
          </div>

          {/* Size (Placeholder) */}
          <div className="flex items-center mb-6">
            <span className="text-gray-700 font-medium mr-4">Size:</span>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                XS
              </button>
              <button className="px-4 py-2 border rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                S
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                M
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                L
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                XL
              </button>
            </div>
          </div>

          {/* Quantity and Action Buttons */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded-md">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 text-2xl font-semibold text-gray-700 hover:bg-gray-100 rounded-l-md"
              >
                -
              </button>
              <span className="px-4 py-2 text-xl font-medium text-gray-800">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 text-2xl font-semibold text-gray-700 hover:bg-gray-100 rounded-r-md"
              >
                +
              </button>
            </div>
            <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition duration-300">
              Buy Now
            </button>
            <button className="px-6 py-3 border border-gray-400 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300">
              Add To Cart
            </button>
            <button className="p-3 border rounded-full text-gray-600 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>

          {/* Delivery Information */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Free Delivery
                </h3>
                <p className="text-gray-600 text-sm">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <hr className="my-4 border-gray-200" />
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 12c0 3.072 1.873 5.785 4.514 7.5A12.001 12.001 0 0012 21.055c3.185-.307 5.983-2.507 7.43-5.424M12 12V8"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Return Delivery
                </h3>
                <p className="text-gray-600 text-sm">
                  Free 30 Days Return Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="w-full max-w-7xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Related Item
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-gray-600 ml-2">
                    ({product.reviews})
                  </span>
                </div>
                <p className="text-xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
