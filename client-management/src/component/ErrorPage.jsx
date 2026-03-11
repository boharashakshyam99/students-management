import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <NavLink
        to="/"
        className="mt-6 inline-block bg-primary text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary-dark transition-all"
      >
        Go Back Home
      </NavLink>
    </div>
  );
};

export default NotFound;
