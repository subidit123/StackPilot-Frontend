import React, { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import keyboard from '../assets/keyboard.png';
import gamesred from '../assets/gamesred.png';
import chairs from '../assets/chairs.png';
import monitor from '../assets/monitor.png';

const flashItems = [
  {
    id: 1,
    name: 'HAVIT HV-G92 Gamepad',
    img: gamesred,
    oldPrice: '$160',
    newPrice: '$120',
    discount: '-40%',
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 2,
    name: 'AK-900 Wired Keyboard',
    img: keyboard,
    oldPrice: '$160',
    newPrice: '$96',
    discount: '-35%',
    rating: 4.3,
    reviews: 75,
  },
  {
    id: 3,
    name: 'IPS LCD Gaming Monitor',
    img: monitor,
    oldPrice: '$400',
    newPrice: '$370',
    discount: '-30%',
    rating: 4.7,
    reviews: 99,
  },
  {
    id: 4,
    name: 'S-Series Comfort Chair',
    img: chairs,
    oldPrice: '$400',
    newPrice: '$375',
    discount: '-25%',
    rating: 4.8,
    reviews: 99,
  },
  {
    id: 5,
    name: 'Gaming Headphones',
    img: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-1080,ar-1080-1080,pr-true,f-auto,q-80/cms/product_variant/04a50d88-6390-4080-9e23-50f98e1faff2/Ant-Esports-H530-Multi-Platform-Pro-Rgb-Gaming-Wired-Headset-for-PC-PS4-PS5-Xbox-One-Switch1-with-mic-Black-Blue.jpg',
    oldPrice: '$180',
    newPrice: '$150',
    discount: '-25%',
    rating: 4.2,
    reviews: 51,
  },
  {
    id: 6,
    name: 'Wireless Mouse',
    img: 'https://m.media-amazon.com/images/I/415YS0KSp6L._SX300_SY300_QL70_FMwebp_.jpg',
    oldPrice: '$60',
    newPrice: '$40',
    discount: '-33%',
    rating: 4.0,
    reviews: 60,
  },
    {
    id: 7,
    name: 'Logitech Gaming Mouse G502',
    img: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._SL1500_.jpg',
    oldPrice: '$70',
    newPrice: '$49',
    discount: '-30%',
    rating: 4.6,
    reviews: 104,
  },
  {
    id: 8,
    name: 'Redragon Mechanical Gaming Keyboard',
    img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg',
    oldPrice: '$85',
    newPrice: '$62',
    discount: '-27%',
    rating: 4.4,
    reviews: 87,
  },
  {
    id: 9,
    name: 'Gaming Desk RGB LED',
    img: 'https://m.media-amazon.com/images/I/71V--WZVUIL._AC_SL1500_.jpg',
    oldPrice: '$220',
    newPrice: '$179',
    discount: '-19%',
    rating: 4.5,
    reviews: 71,
  },
];

const FlashSale = () => {
  const scrollRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endTime = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (direction === 'left') {
      container.scrollBy({ left: -250, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-4 py-10 md:px-20 bg-white">
      {/* Title and Timer */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-red-500 font-medium">Today’s</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Flash Sales</h2>
        </div>
        <div className="flex gap-2 items-center font-mono">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => {
            const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i];
            return (
              <div key={label} className="flex flex-col items-center px-2 py-1 bg-black text-white rounded-md">
                <span className="text-lg">{String(value).padStart(2, '0')}</span>
                <span className="text-xs">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-2 top-[50%] transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
        onClick={() => scroll('left')}
      >
        <FiChevronLeft size={20} />
      </button>

      {/* Product Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 scroll-smooth"
      >
        {flashItems.map((item) => (
          <div
            key={item.id}
            className="min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm p-4 relative"
          >
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {item.discount}
            </div>

            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer hover:text-red-500 transition">
              <FiHeart size={18} />
            </div>

            <img src={item.img} alt={item.name} className="w-full h-32 object-contain mb-3" />
            <h3 className="text-sm font-semibold text-gray-800 mb-1">{item.name}</h3>

            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="text-red-500 font-bold">{item.newPrice}</span>
              <span className="line-through text-gray-400">{item.oldPrice}</span>
            </div>

            <div className="flex items-center text-yellow-500 text-sm mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} className={i < Math.round(item.rating) ? '' : 'text-gray-300'} />
              ))}
              <span className="ml-2 text-gray-600 text-xs">({item.reviews})</span>
            </div>

            <button className="mt-auto w-full bg-black text-white py-1.5 rounded hover:bg-gray-800 text-sm transition cursor-pointer">
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-2 top-[50%] transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
        onClick={() => scroll('right')}
      >
        <FiChevronRight size={20} />
      </button>

      {/* View All */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition cursor-pointer">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSale;
