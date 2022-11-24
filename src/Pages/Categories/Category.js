import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {

    const {category:categoryName,image,_id} = category
    return (
        <div className="w-full shadow-xl relative">
            <figure className='h-[350px]'><img src={image} alt="Shoes" className='brightness-75 object-cover w-full h-full hover:scale-[1.1] ease-in duration-300' /></figure>
            <div className="absolute bottom-10 left-10 ">
                <h2 className="text-white font-semibold capitalize text-2xl font-jost ">{categoryName}</h2>
                <Link
                to="/"
                aria-label=""
                className="block font-medium px-5 py-2 bg-[#BBCED5] mt-4"
              >
               View product
              </Link>
            </div>
       </div>
    );
};

export default Category;