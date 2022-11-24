import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative">
      <img
        src="https://i.ibb.co/rFSxhHZ/spacejoy-Rq-O6kwm4t-ZY-unsplash.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-50 min-h-[90vh] font-jost items-center flex px-12">
        <div className="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="">
            <div className="w-full max-w-xl text-white">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-6xl sm:leading-none">
                The furniture that <br></br>
                defines you
              </h2>
              <p className="max-w-xl mb-4 text-base md:text-2xl">
              Your comfort and aesthetic design suitable for you is before anything else
              </p>
              <Link
                to="/"
                aria-label=""
                className="inline-flex items-center font-semibold px-8 py-4 bg-primary text-xl mt-5"
              >
                <FaCartPlus className='mr-2'></FaCartPlus>
                Shop Now
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;