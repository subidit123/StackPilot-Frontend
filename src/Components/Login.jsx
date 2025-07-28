// src/Components/Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import phoneCart from "../assets/phonecart.jpg";

const Login = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Image */}
      <div className="bg-blue-100 flex items-center justify-center">
        <img src={phoneCart} alt="Login" className="w-[80%] max-w-md" />
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center px-6 md:px-20 py-12 bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Log In</h2>
          <p className="text-sm text-gray-500 mb-6">Enter your details below</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email or Phone Number</label>
              <input
                type="text"
                placeholder="Enter email or phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <Link to="#" className="text-sm text-red-500 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-red-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
