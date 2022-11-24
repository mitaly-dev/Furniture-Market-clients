import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { FaBeer, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const menu = <>
        <li>
            <Link
              to="/home"
              aria-label="home"
              title="home"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </Link>
        </li>
        <li>
            <Link
              to="/categories"
              aria-label="categories"
              title="categories"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Categories
            </Link>
        </li>
        <li>
            <Link
              to="/blog"
              aria-label="blog"
              title="blog"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Blog
            </Link>
        </li>
    
    </>
    return (
        <div class="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 font-jost">
      <div class="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center"
        >
          <img src={logo} alt="" />
        </Link>
        <ul class="flex items-center hidden space-x-8 lg:flex text-[16px] uppercase">
          {menu}
        </ul>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/login"
              class="inline-flex items-center justify-center h-12 px-3 font-medium tracking-wide"
              aria-label="Sign up"
              title="Sign up"
            >
              Log In
            </Link>
          </li>
          <FaUser></FaUser>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center"
                    >
                    <img src={logo} alt="" />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    {menu}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default Navbar;