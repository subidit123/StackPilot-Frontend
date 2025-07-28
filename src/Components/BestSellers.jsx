import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import redhoodies from '../assets/redhoodies.png';
import bags from '../assets/bags.png';
import speajers from '../assets/speajers.png';
import bookself from '../assets/bookself.png';

const products = [
  { name: 'The north coat', price: 200, original: 240, rating: 4.5, reviews: 120, img: redhoodies },
  { name: 'Gucci duffle bag', price: 180, original: 220, rating: 4.7, reviews: 85, img: bags },
  { name: 'RGB Liquid CPU Cooler', price: 150, original: 190, rating: 4.3, reviews: 96, img: speajers },
  { name: 'Small Bookshelf', price: 90, original: 110, rating: 4.2, reviews: 64, img: bookself },
];

const BestSellers = () => {
  return (
    <section className="px-4 md:px-20 py-10 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div className="text-red-500 font-semibold">This Month</div>
        <button className="text-sm text-white bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition">
          View All
        </button>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Best Selling Products</h2>

      <div className="flex gap-6 overflow-x-auto pb-2">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[200px] md:min-w-[230px] bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg relative group cursor-pointer"
          >
            <img src={item.img} alt={item.name} className="w-full h-40 object-contain mb-3" />
            <h3 className="text-sm font-medium">{item.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-red-500 font-semibold">${item.price}</span>
              <span className="line-through text-gray-400 text-sm">${item.original}</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} className={i < Math.floor(item.rating) ? '' : 'text-gray-300'} />
              ))}
              <span className="text-gray-600 text-xs ml-1">({item.reviews})</span>
            </div>

            <FaHeart className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
