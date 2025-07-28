import React from "react";
import { FaHeart } from "react-icons/fa";
import ps5 from "../assets/ps5.png";
import hat from "../assets/hat.jpg";
import sent from "../assets/sent.png";

const arrivals = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: ps5,
    isNew: true,
  },
  {
    id: 2,
    title: "Women's Collections",
    description: "Featured women collections that give you another vibe.",
    image: hat,
    isNew: true,
  },
  {
    id: 3,
    title: "Speakers",
    description: "Amazon wireless speakers - surround sound system.",
    image:
      "https://m.media-amazon.com/images/I/41nmLm4yTDL._SX300_SY300_QL70_FMwebp_.jpg",
    isNew: false,
  },
  {
    id: 4,
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP - luxury fragrance.",
    image: sent,
    isNew: false,
  },
];

const NewArrival = () => {
  return (
    <section className="px-4 md:px-20 py-12 bg-black text-white">
      {/* Heading */}
      <div className="mb-8">
        <p className="text-sm text-red-600 font-semibold">Featured</p>
        <h2 className="text-2xl font-bold text-white">New Arrival</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Large Item */}
        <div className="md:row-span-2 relative group overflow-hidden rounded-md bg-black">
          <img
            src={arrivals[0].image}
            alt={arrivals[0].title}
            className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition"
          />

          {/* NEW Badge + Wishlist */}
          {arrivals[0].isNew && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          )}
          <button className="absolute top-2 right-2 text-white hover:text-red-500">
            <FaHeart />
          </button>

          <div className="absolute bottom-4 left-4">
            <h3 className="text-lg font-semibold">{arrivals[0].title}</h3>
            <p className="text-sm">{arrivals[0].description}</p>
            <div className="flex space-x-2 mt-2">
              <button className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">
                Shop Now
              </button>
              <button className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Right Items */}
        {arrivals.slice(1).map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-md bg-black"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover opacity-70 group-hover:scale-105 transition"
            />

            {/* NEW Badge + Wishlist */}
            {item.isNew && (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            )}
            <button className="absolute top-2 right-2 text-white hover:text-red-500">
              <FaHeart />
            </button>

            <div className="absolute bottom-4 left-4">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
              <div className="flex space-x-2 mt-2">
                <button className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">
                  Shop Now
                </button>
                <button className="text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
