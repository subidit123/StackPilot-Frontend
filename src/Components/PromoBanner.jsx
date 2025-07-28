import React from 'react';


const PromoBanner = () => {
  return (
    <section className="bg-black text-white py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="mb-6 md:mb-0 max-w-md">
          <p className="text-green-400 uppercase mb-2">Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Enhance Your <br /> Music Experience
          </h2>
          {/* Countdown Example (Static) */}
          <div className="flex gap-4 text-center mb-4">
            <div>
              <p className="text-2xl font-bold">23</p>
              <span className="text-xs">Hours</span>
            </div>
            <div>
              <p className="text-2xl font-bold">05</p>
              <span className="text-xs">Mins</span>
            </div>
            <div>
              <p className="text-2xl font-bold">36</p>
              <span className="text-xs">Secs</span>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition">
            Buy Now!
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img src={'https://www.bbassets.com/media/uploads/p/l/40329897_4-jbl-tune-770nc-bluetooth-headphone-with-adaptive-noise-cancellation-pure-bass-sound-over-ear-black.jpg'} alt="JBL Headphone" className="w-80 h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
