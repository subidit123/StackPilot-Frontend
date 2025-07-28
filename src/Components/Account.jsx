import React from 'react';

function Account() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white px-4 lg:px-20 py-10">
      
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 mb-10 lg:mb-0">
        <h2 className="text-lg font-bold mb-6">Manage My Account</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="text-red-500 font-semibold">My Profile</li>
          <li className="hover:text-red-500 cursor-pointer">Address Book</li>
          <li className="hover:text-red-500 cursor-pointer">My Payment Options</li>
        </ul>

        <h2 className="text-lg font-bold mt-8 mb-4">My Orders</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-red-500 cursor-pointer">My Returns</li>
          <li className="hover:text-red-500 cursor-pointer">My Cancellations</li>
        </ul>

        <h2 className="text-lg font-bold mt-8 mb-4">My Wishlist</h2>
      </div>

      {/* Edit Profile Form */}
      <div className="w-full lg:w-3/4 border border-gray-200 p-6 rounded-md shadow-sm">
        <h2 className="text-xl font-semibold text-red-500 mb-6">Edit Your Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input type="text" placeholder="First Name" className="border p-3 rounded-md w-full" />
          <input type="text" placeholder="Last Name" className="border p-3 rounded-md w-full" />
          <input type="email" placeholder="Email" className="border p-3 rounded-md w-full" />
          <input type="text" placeholder="Address" className="border p-3 rounded-md w-full" />
        </div>

        <h3 className="font-semibold mb-2">Password Changes</h3>
        <div className="space-y-4 mb-6">
          <input type="password" placeholder="Current Password" className="border p-3 rounded-md w-full" />
          <input type="password" placeholder="New Password" className="border p-3 rounded-md w-full" />
          <input type="password" placeholder="Confirm New Password" className="border p-3 rounded-md w-full" />
        </div>

        <div className="flex justify-end space-x-4">
          <button className="border px-4 py-2 rounded-md">Cancel</button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
