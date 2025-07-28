import React, { useState } from "react";
import monitors from "../assets/monitor.png";
import gamesred from "../assets/gamesred.png";
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 370,
      quantity: 1,
      image: monitors,
    },
    {
      id: 2,
      name: "HI Gamepad",
      price: 120,
      quantity: 2,
      image: gamesred,
    },
  ]);

  const handleQuantityChange = (id, value) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Number(value) } : item
    );
    setCartItems(updatedItems);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Cart</h2>

      <div className="bg-white p-6 rounded shadow">
        {/* Table Headers */}
        <div className="grid grid-cols-4 font-semibold border-b pb-2">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 items-center py-4 border-b"
          >
            {/* Product */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded object-cover"
              />
              <span>{item.name}</span>
            </div>

            {/* Price */}
            <div>${item.price}</div>

            {/* Quantity */}
            <div>
              <select
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                className="border rounded px-2 py-1"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Subtotal */}
            <div>${item.price * item.quantity}</div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button className="border px-4 py-2 rounded">Return To Shop</button>
          <button className="bg-black text-white px-4 py-2 rounded">
            Update Cart
          </button>
        </div>

        {/* Coupon & Cart Total */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-10">
          {/* Coupon */}
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border text-sm px-3 py-1 h-8 rounded w-48"
            />
            <button className="bg-red-600 text-white text-sm px-3 py-1 h-8 rounded hover:bg-red-700">
              Apply
            </button>
          </div>

          {/* Cart Total */}
          <div className="border p-4 rounded w-full md:w-80">
            <h3 className="font-semibold text-lg mb-4">Cart Total</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
