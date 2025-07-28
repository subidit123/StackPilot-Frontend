import React, { useState } from 'react';
import { FiHeart, FiShoppingCart, FiUser, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const cartCount = 3; // Dummy count
  const wishlistCount = 2; // Dummy count

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-black text-white text-sm text-center py-1">
        Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
        <span className="underline cursor-pointer">Shop Now</span>
      </div>

      {/* Navbar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          StackPilot
        </Link>

        {/* Menu Links */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/signup" className="hover:text-blue-600">
            Sign Up
          </Link>
          <Link to="/login" className="hover:text-blue-600">
            Log In
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 relative">
          {/* Wishlist Icon */}
          <Link to="/wishlist" className="relative">
            <FiHeart className="w-5 h-5 cursor-pointer" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FiShoppingCart className="w-5 h-5 cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Account Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FiUser className="w-5 h-5" />
              <FiChevronDown className="w-4 h-4 text-gray-600" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-gray-800 text-white shadow-lg rounded-lg py-2 z-50">
                <Link
                  to="/account"
                  className="block px-4 py-2 text-sm hover:bg-gray-700"
                >
                  👤 My Account
                </Link>
                <Link
                  to="/orders"
                  className="block px-4 py-2 text-sm hover:bg-gray-700"
                >
                  📦 My Orders
                </Link>
                <Link
                  to="/checkout"
                  className="block px-4 py-2 text-sm hover:bg-gray-700"
                >
                  💳 Checkout
                </Link>
                <hr className="my-1 border-gray-600" />
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                >
                  🔓 Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
