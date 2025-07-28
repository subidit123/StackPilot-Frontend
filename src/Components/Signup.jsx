// src/Components/Signup.jsx
import React from "react";
import phoneCart from "../assets/phonecart.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Image */}
      <div className="bg-blue-100 flex items-center justify-center">
        <img src={phoneCart} alt="Signup" className="w-[80%] max-w-md" />
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center px-6 md:px-20 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-1">Create an account</h2>
          <p className="text-sm text-gray-500 mb-6">Enter your details below</p>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Create Account
            </button>
          </form>

          {/* Google Sign Up */}
          <button className="w-full flex items-center justify-center mt-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
            <FcGoogle className="text-xl mr-2" />
            Sign up with Google
          </button>

          {/* Footer */}
          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-black underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
