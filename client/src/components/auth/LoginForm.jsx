import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (

        <div className="w-full bg-white shadow-lg rounded-2xl p-8">

            <div className="text-center ">
                <h1 className="text-3xl font-bold text-gray-800">
                    Welcome Back
                </h1>

                <p className="text-gray-500 mt-2">
                    Login to your account
                </p>
            </div>

        <form  className="space-y-5">

            <div>
                <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
                >
                Email Address
                </label>

                <input
                type="email"
                id="email"
                placeholder="Enter Your Gamil"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />

            </div>


            <div>

                <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2">
                Password
                </label>

                <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />

            </div>

            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-gray-600">Remember me</span>
                </label>

                <button
                type="button"
                className="text-black font-medium hover:underline"
                >
                Forgot Password?
                </button>
            </div>

            <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition" >
                Login
            </button>

        </form>

            <p className="text-center text-gray-600 mt-6">
            Don't have an account?
            <Link to="/auth/register"className="text-black font-semibold hover:underline">Register</Link>
            </p>

      </div>

    );
};

export default LoginForm;



  


