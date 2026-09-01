
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">

            {/* 404 */}
            <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tight text-gray-900">
            404
            </h1>

            {/* Title */}
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-800">
            Page Not Found
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-500 text-base sm:text-lg">
            Sorry, we couldn't find the page you're looking for.
            The page may have been removed or the URL might be incorrect.
            </p>

            {/* Button */}
            <div className="mt-8">
            <Link
                to="/"
                className="inline-flex items-center justify-center rounded-lg
                bg-black px-6 py-3 text-sm font-semibold text-white
                transition-all duration-300 hover:bg-gray-800
                hover:-translate-y-0.5 shadow-md"
            >
                ← Back to Home
            </Link>
            </div>

            <div className="flex justify-center align-middle mt-6 ">
                <img className="rounded-full" src="https://i.ibb.co.com/RkWLtQ4b/J5x0t-Ymxn9-X3.jpg" alt="" />
            </div>

            {/* Small text */}
            <p className="mt-8 text-sm text-gray-400">
            Ecommerce Shopping
            </p>

        </div>
    </div>
  );
};

export default NotFound;

