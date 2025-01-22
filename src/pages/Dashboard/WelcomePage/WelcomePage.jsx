import React from "react";

const WelcomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      <div className="text-center p-6 max-w-3xl bg-white rounded-lg shadow-lg">
       
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage your data, track progress, and access all features conveniently
          from one place. Let's get started!
        </p>

      
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
            View Reports
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition">
            Manage Users
          </button>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
