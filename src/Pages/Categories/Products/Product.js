import React from 'react';
import { useState } from 'react';
import { FaCross, FaHeart } from 'react-icons/fa';

const Product = ({product}) => {
    const [optionOpen,setOptionOpen] = useState(false)
    const {title,verified,sellerEmail,location,sellerName,time,yearsOfPurchase,condition,category,originalPrice,resalePrice,_id,image} = product
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md font-jost">
        <div className="flex space-x-4 justify-between">
            {/* <img alt="" src={image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" /> */}
            <div className="flex flex-col space-y-1">
                <div className='flex'>
                <a rel="noopener noreferrer" href="#" className=" font-semibold capitalize">{sellerName}</a>
                {
                    verified && <img src="https://i.ibb.co/D8SPXJg/verified-2.png" alt="" className='w-4 h-4 ml-2' />
                }
                </div>
                <span className="text-xs dark:text-gray-400">{time}</span>
            </div>
            <div className='relative'>
                <button onClick={()=>setOptionOpen(!optionOpen)} type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                    <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                    <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                    <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                </svg>
                </button>
                {
                    optionOpen && <div className='absolute top-0 border right-5 rounded-lg bg-white p-5 w-48 text-center space-y-2'>
                    <button className='capitalize flex items-center'>
                    <FaHeart className='text-red-400 mr-4'></FaHeart>add to wishlist</button>
                    <button className='capitalize flex items-center'>
                    <span className='text-secondary mr-4 text-xl font-semibold'>x</span>Report to admin</button>
                </div>
                }
            </div>
        </div>
        <div>
            <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
            <h2 className="mb-1 text-xl font-semibold capitalize">{title}</h2>
            <p className=" dark:text-gray-400">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
        </div>
        <div className="text-[17px] space-y-1">
            <p><span className='font-semibold'>Location :</span> {location}</p>
            <p><span className='font-semibold'>Years Of Purchase :</span> {yearsOfPurchase}</p>
            <p><span className='font-semibold'>Condition :</span> {condition}</p>
            <p><span className='font-semibold'>Original Price :</span> ${originalPrice}</p>
            <p className='mt-2 font-semibold'>Resale Price <span className='text-red-600 font-semibold text-2xl'>${resalePrice}</span></p>
           <button>Add to cart</button>
        </div>
    </div>
    );
};

export default Product;