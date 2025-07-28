import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import bags from "../assets/bags.png";
import speajers from "../assets/speajers.png";
import gameblack from "../assets/gameblack.png";
import greenhoodies from "../assets/greenhoodies.png";

const initialWishlist = [
  {
    id: 5,
    name: "Gucci Duffle Bag",
    category: "Fashion",
    price: 180,
    image: bags,
  },
  {
    id: 6,
    name: "RGB Liquid CPU Cooler",
    category: "Electronics",
    price: 150,
    image: speajers,
  },
  {
    id: 7,
    name: "GP11 Shooter Gamepad",
    category: "Gaming",
    price: 99,
    image: gameblack,
  },
  {
    id: 8,
    name: "Green Hoodies",
    category: "Clothing",
    price: 660,
    image: greenhoodies,
  },
];

const recommendedItems = [
  {
    id: 9,
    name: "Sony Headphones",
    price: 299,
    image: "https://m.media-amazon.com/images/I/31+CMjgVyHL._SY300_SX300_.jpg",
  },
  {
    id: 10,
    name: "Google Pixel 7",
    price: 899,
    image: "https://m.media-amazon.com/images/I/51f4A6Tr8zL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    id: 11,
    name: "iPad Mini",
    price: 599,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-finish-select-gallery-202410-space-gray-wifi?wid=5120&hei=2880&fmt=webp&qlt=90&.v=eDJDc00wczl1QWk5QmpVYitFNXQwN0Y2ME45L1lWWDhkYWVYaTNEZnBvQzFIb2RjNGpCMXpSRUxjQzIyanM2ZmdPVzMzRUlud0ZXVzhQeXM2MU9TeHdUMngwVnJycmY0WkN2ZnNvOUpFNFhjMTRSeVp4OUZCV1BzekdHUVp2M0M4Mm0vNEhPblFDVzlCdng5dHIzUC93&traceId=1",
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    price: 199,
    image:
      "https://www.boat-lifestyle.com/cdn/shop/products/05ef4b39-9658-49d9-a2e2-10670c9a4255_600x.png?v=1698730727",
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleDelete = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen px-4 py-10 md:px-16 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="font-semibold text-gray-800 mt-3">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-red-500 font-bold mt-1">${item.price}</p>

              <div className="mt-auto flex justify-between items-center pt-4">
                <button className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600">
                  Add to Cart
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-gray-500 hover:text-red-600"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Just For You Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Just For You</h2>
        <button className="text-sm text-red-500 hover:underline">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {recommendedItems.map((item) => (
          <div
            key={item.id}
            className="min-w-[180px] bg-white p-4 rounded-lg shadow flex-shrink-0 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-3 font-medium text-gray-800">{item.name}</h3>
            <p className="text-red-500 font-bold mt-1">${item.price}</p>
            <button className="mt-auto bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition mt-4">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
