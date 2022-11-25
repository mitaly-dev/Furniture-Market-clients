import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCartPlus, FaCross, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import BookingModal from './BookingModal';

const Product = ({product}) => {
    const {user} = useContext(AuthContext)
    const {productRefetch,setProductRefetch} = useContext(AuthContext)
    const [optionOpen,setOptionOpen] = useState(false)
    const [bookingModalData,setBookingModalData]=useState(null)
    const {title,verify,email,location,sellerName,time,yearsOfPurchase,condition,category,originalPrice,resalePrice,_id,image,available,description} = product

    if(!available){
        return
    }

    const reportHandle=()=>{
        const product={
            image,
            title,
            category,
            userEmail:user?.email,
            email,
            sellerName,
            resalePrice
        }
        fetch(`${process.env.REACT_APP_PORT}/reportedProduct`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('Report to admin successfull')
            }
            else{
                toast.error(data.message,{duration:1200})
            }
        })
        .catch(error=>console.log(error))
    }
    
    const wishListHandle=()=>{
        const product={
            productImg:image,
            title,
            category,
            price:resalePrice,
            name : user?.displayName ,
            email : user?.email,
        }
        fetch(`${process.env.REACT_APP_PORT}/wishList`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('wish product added successfull')
            }
            else{
                toast.error(data.message,{duration:1200})
            }
        })
        .catch(error=>console.log(error))
    }

    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md font-jost bg-white">
        <div className="flex space-x-4 justify-between">
            {/* <img alt="" src={image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" /> */}
            <div className="flex flex-col space-y-1">
                <div className='flex'>
                <Link rel="noopener noreferrer" to="#" className=" font-semibold capitalize">{sellerName}</Link>
                {
                    verify && <img src="https://i.ibb.co/D8SPXJg/verified-2.png" alt="" className='w-4 h-4 ml-2' />
                }
                </div>
                <span className="text-xs dark:text-gray-400">{time}</span>
            </div>
            <div className='relative'>
                <button onClick={()=>setOptionOpen(!optionOpen)} type="button">
                    {
                        optionOpen? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> : 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                        <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                        <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                    </svg>
                    }
                </button>
                {
                    optionOpen && <div className='absolute top-0 border right-7 rounded-lg bg-white p-5 w-48 text-center space-y-2'>
                    <button onClick={wishListHandle} className='capitalize flex items-center'>
                    <FaHeart className='text-red-400 mr-4'></FaHeart>add to wishlist</button>
                    <button onClick={reportHandle} className='capitalize flex items-center'>
                    <span className='text-secondary mr-4 text-xl font-semibold'>x</span>Report to admin</button>
                </div>
                }
            </div>
        </div>
        <div>
            <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
            <h2 className="mb-1 text-xl font-semibold capitalize">{title}</h2>
            <p className=" dark:text-gray-400">
                {
                    description? description.slice(0,120)+"..." : "Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud..."
                }           
            </p>
        </div>
        <div className="text-[17px] space-y-1 capitalize">
            <p><span className='font-semibold'>Location :</span> {location}</p>
            <p><span className='font-semibold'>Years Of Purchase :</span> {yearsOfPurchase}</p>
            <p><span className='font-semibold'>Condition :</span> {condition}</p>
            <p><span className='font-semibold'>Original Price :</span> ${originalPrice}</p>
            <p className='mt-2 font-semibold'>Resale Price <span className='text-red-600 font-semibold text-2xl'>${resalePrice}</span></p>
            <div className='mt-2'>
                <label onClick={()=>setBookingModalData(product)} htmlFor={`booking-modal${_id}`} className="inline-flex items-center font-semibold px-6 py-2 bg-primary text-white text-lg mt-5 cursor-pointer">
                <FaCartPlus className='mr-2'></FaCartPlus>
                    Book Now
                </label>
            </div>
            {
                bookingModalData && <BookingModal product={product} setBookingModalData={setBookingModalData}></BookingModal>
            }
        </div>
    </div>
    );
};

export default Product;