import React, { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import iphonemobiles from '../assets/iphonemobiles.jpg';
import ps5 from '../assets/ps5.png';
import jbl from '../assets/jbl.png';
import laptops from '../assets/laptops.png';

const slides = [
  { title: 'iPhone 14 Series', desc: 'Up to 10% Off Voucher', img: iphonemobiles },
  { title: 'JBL Speaker', desc: 'Bass boosted sound', img: jbl },
  { title: 'Apple Watch', desc: 'Fitness and More', img: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/309465_0_stnogk.png?tr=w-640' },
  { title: 'PS5', desc: 'Now in Stock', img: ps5 },
  { title: 'AirPods Max', desc: 'Surround Sound Wireless', img: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/301165_0_rmd0hf.png?tr=w-640' },
  { title: 'Laptops', desc: 'Up to 20% Off', img: laptops },
];

const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty"
];

const Hero = () => {
  const [sliderRef, slider] = useKeenSlider({ loop: true, slides: { perView: 1 } });

  const timer = useRef();

  useEffect(() => {
    if (!slider) return;
    timer.current = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(timer.current);
  }, [slider]);

  return (
    <section className="bg-black text-white py-10 px-4 md:px-16">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Category Menu */}
        <div className="hidden md:block w-full md:w-1/4">
          <ul className="space-y-4 text-sm font-medium">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="cursor-pointer text-white hover:text-red-400 border-b border-gray-700 pb-1"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Slider */}
        <div className="w-full md:w-3/4">
          <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col md:flex-row items-center justify-between px-6 md:px-16"
              >
                <div className="max-w-md mb-6 md:mb-0">
                  <h2 className="text-red-400 text-lg md:text-xl font-medium mb-1">{slide.title}</h2>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.desc}</h1>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition">
                    Shop Now
                  </button>
                </div>
                <img src={slide.img} alt={slide.title} className="w-60 h-60 object-contain" />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
