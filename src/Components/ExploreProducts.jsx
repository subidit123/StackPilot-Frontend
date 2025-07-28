import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import camera from "../assets/camera.png";
import remotecar from "../assets/remotecar.png";
import laptops from "../assets/laptops.png";
import shoes from "../assets/shoes.png";
import greenhoodies from "../assets/greenhoodies.png";
import gameblack from "../assets/gameblack.png";
import creams from "../assets/creams.png";
import dogfeed from "../assets/dogfeed.jpg";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Drone 4K",
    desc: "Best For Drone Shot",
    price: "$189",
    image: "https://m.media-amazon.com/images/I/61al5gk0FyL._SY450_.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Canon EOS DSLR Camera",
    desc: "Professional Gear",
    price: "$299",
    image: camera,
    isNew: true,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    desc: "Multiplayer Joy",
    price: "$549",
    image: gameblack,
  },
  {
    id: 4,
    name: "Running Shoes",
    desc: "Comfort Performance",
    price: "$1179",
    image: shoes,
  },
  {
    id: 5,
    name: "Breed Dry Food Dog",
    desc: "For All Breeds",
    price: "$100",
    image: dogfeed,
  },
  {
    id: 6,
    name: "Kids Electric Car",
    desc: "Toy Vehicle",
    price: "$970",
    image: remotecar,
  },
  {
    id: 7,
    name: "Curology Product Set",
    desc: "Skincare Kit",
    price: "$500",
    image: creams,
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    desc: "Winter Special",
    price: "$660",
    image: greenhoodies,
  },
];

const ExploreProducts = () => {
  return (
    <section className="px-4 md:px-20 py-10">
      <h2 className="text-xl font-semibold mb-6 border-l-4 border-red-600 pl-2">
        Explore Our Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition relative group"
          >
            {/* Heart Icon */}
            <FiHeart className="absolute top-3 right-3 text-gray-500 text-lg group-hover:text-red-500 cursor-pointer" />

            {/* NEW Badge */}
            {item.isNew && (
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                NEW
              </span>
            )}

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-32 w-full object-contain mb-3"
            />

            {/* Name & Description */}
            <h3 className="font-semibold text-sm">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.desc}</p>

            {/* Price & Rating */}
            <div className="flex items-center justify-between mt-2">
              <span className="text-red-500 font-bold">{item.price}</span>
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-xs" />
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="mt-3 w-full bg-black text-white text-sm py-1.5 rounded hover:bg-gray-800 transition cursor-pointer">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ExploreProducts;
