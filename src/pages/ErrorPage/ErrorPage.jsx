import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-white">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-7xl font-extrabold">404</h1>
        <p className="text-xl lg:text-2xl font-medium">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-sm lg:text-base text-gray-300">
          It might have been moved or deleted. Please check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="mt-4 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
      
    </div>
  );
};

export default ErrorPage;
