import React, { useState } from "react";
import monitor from "../assets/monitor.png";
import gamesred from "../assets/gamesred.png";
function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Billing Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Billing Details Form */}
        <form className="space-y-4 bg-white p-6 rounded shadow">
          <input
            type="text"
            placeholder="First Name*"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Street Address*"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Apartment, floor, etc. (optional)"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Town/City*"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Phone Number*"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full border p-2 rounded"
          />

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm">Save this info for faster checkout next time</span>
          </label>
        </form>

        {/* Right: Order Summary & Payment */}
        <div className="bg-white p-6 rounded shadow space-y-6">
          {/* Product Summary */}
          <div className="space-y-4">
            {/* Product 1 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src={monitor}
                  alt="LCD Monitor"
                  className="w-14 h-14 object-cover rounded"
                />
                <span className="font-medium">LCD Monitor</span>
              </div>
              <span>$370</span>
            </div>

            {/* Product 2 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src={gamesred}
                  alt="HI Gamepad"
                  className="w-14 h-14 object-cover rounded"
                />
                <span className="font-medium">HI Gamepad</span>
              </div>
              <span>$240</span>
            </div>

            <hr />

            {/* Totals */}
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>$610</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping:</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="font-semibold mb-2">Payment Method</h3>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
              />
              <span>Bank</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              <span>Cash on delivery</span>
            </label>

            {/* Payment Icons */}
            <div className="flex gap-2 mt-2">
              <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="mastercard" className="h-6" />
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" className="h-6" />
              <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="paypal" className="h-6" />
            </div>
          </div>

          {/* Coupon Code */}
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              className="flex-1 border rounded px-3 py-2"
              placeholder="Coupon Code"
            />
            <button className="bg-black text-white px-4 rounded hover:bg-gray-800">
              Apply Coupon
            </button>
          </div>

          {/* Place Order */}
          <button className="w-full mt-4 bg-red-600 text-white py-2 rounded hover:bg-red-700 font-semibold">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
