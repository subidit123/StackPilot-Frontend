import React from "react";
import qrcode from "../assets/qrcode.jpg"; // Ensure this exists

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-20 py-12">
      {/* Grid Content */}
      <div className="grid md:grid-cols-5 gap-8">
        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
          <p className="text-sm mb-2">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full text-white rounded-l border-red-600"
            />
            <button className="bg-white text-black px-4 rounded-r hover:bg-gray-200 transition">
              →
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p className="text-sm">Street 21, Salt Lake Sector 5</p>
          <p className="text-sm mb-2">Kolkata, West Bengal - 700091</p>
          <p className="text-sm mb-2">stackpilot@gmail.com</p>
          <p className="text-sm">+91 9000000000</p>
        </div>

        {/* Account Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* QR Code and App Download */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <p className="text-sm mb-2">Save ₹250 with App – New Users Only</p>
          <img
            src={qrcode}
            alt="QR Code"
            className="w-24 h-24 mb-4 bg-white p-1 rounded"
          />
          <div className="flex gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="w-24"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-24"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© Copyright Rimel 2025. All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <i className="fab fa-facebook-f cursor-pointer hover:text-gray-300"></i>
          <i className="fab fa-twitter cursor-pointer hover:text-gray-300"></i>
          <i className="fab fa-instagram cursor-pointer hover:text-gray-300"></i>
          <i className="fab fa-linkedin-in cursor-pointer hover:text-gray-300"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
