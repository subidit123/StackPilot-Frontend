import React from 'react';

const BillingDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Form Section */}
        <form className="space-y-4">
          <input type="text" placeholder="First Name" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Company Name" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Street Address" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Apartment, floor, etc. (optional)" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Town/City" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Save this information for faster check-out next time</span>
          </label>
        </form>

        {/* Right Cart Summary Section */}
        <div className="border p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Your Order</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>LCD Monitor</span>
              <span>$650</span>
            </div>
            <div className="flex justify-between">
              <span>H1 Gamepad</span>
              <span>$1100</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span>$1750</span>
            </div>
          </div>

          <div className="mt-6">
            <input type="text" placeholder="Coupon Code" className="border p-2 w-full mb-2 rounded" />
            <button className="bg-gray-700 text-white px-4 py-2 rounded w-full mb-2">Apply Coupon</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded w-full">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
