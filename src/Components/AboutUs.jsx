import React from "react";
import TomCruise from "../assets/TomCruise.png";
import WillSmith from "../assets/WillSmith.png";
import EmmaWatson from "../assets/EmmaWatson.png";
import cartshopping from "../assets/cartshopping.jpg";
const team = [
  {
    name: "Tom Cruise",
    position: "Founder & Chairman",
    img: TomCruise,
  },
  {
    name: "Emma Watson",
    position: "Managing Director",
    img: EmmaWatson,
  },
  {
    name: "Will Smith",
    position: "Product Designer",
    img: WillSmith,
  },
];

export default function AboutUs() {
  return (
    <div className="px-6 md:px-20 py-10">
      {/* Our Story */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in multiple countries. Supported
            by a wide range of tailored marketing, data, and service solutions,
            Exclusive has 10.5k sellers and 33k monthly active users. Exclusive
            has more than 25k products to offer.
          </p>
        </div>
        <img
          src={cartshopping}
          alt="Our Story"
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-14">
        <div>
          <h3 className="text-3xl font-bold">10.5k</h3>
          <p className="text-gray-500 text-sm">Sellers active on our site</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">33k</h3>
          <p className="text-gray-500 text-sm">Monthly product sales</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">45.5k</h3>
          <p className="text-gray-500 text-sm">Customers active on our site</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">25k</h3>
          <p className="text-gray-500 text-sm">Annual gross sales on our site</p>
        </div>
      </div>

      {/* Team Section */}
    {/* Team Section */}
<h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
  {team.map((member, index) => (
    <div
      key={index}
      className="bg-white border border-gray-200 shadow-md rounded-lg w-[370px] h-[564px] flex flex-col items-center mx-auto"
    >
      <div className="h-[80%] w-full flex items-center justify-center overflow-hidden">
        <img
          src={member.img}
          alt={member.name}
          className="object-contain h-full w-full"
        />
      </div>
      <div className="h-[20%] text-center px-2 mt-2">
        <h4 className="text-lg font-semibold">{member.name}</h4>
        <p className="text-sm text-gray-500">{member.position}</p>
        <div className="flex justify-center gap-4 mt-1">
          <img
            src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
            alt="Twitter"
            className="w-5 h-5 hover:opacity-70 cursor-pointer"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
            alt="LinkedIn"
            className="w-5 h-5 hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Bottom Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3595/3595455.png"
            alt="Free Delivery"
            className="w-10 mx-auto mb-2"
          />
          <p className="font-semibold">Free Delivery</p>
          <p className="text-sm text-gray-500">For all orders over ₹500</p>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/5978/5978477.png"
            alt="Customer Service"
            className="w-10 mx-auto mb-2"
          />
          <p className="font-semibold">24/7 Customer Service</p>
          <p className="text-sm text-gray-500">Friendly support anytime</p>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/189/189665.png"
            alt="Secure Payment"
            className="w-10 mx-auto mb-2"
          />
          <p className="font-semibold">Secure Payment</p>
          <p className="text-sm text-gray-500">100% secure transaction</p>
        </div>
      </div>
    </div>
  );
}
