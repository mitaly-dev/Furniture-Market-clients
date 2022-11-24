import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({product,setBookingModalData}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {title,verified,sellerEmail,location,sellerName,time,yearsOfPurchase,condition,category,originalPrice,resalePrice,_id,image} = product
    const {user,loading} = useContext(AuthContext)

    const bookingHandle=(data)=>{
        const name = data.name
        const email = data.email
        const title = data.item 
        const price = data.price 
        const productImg = image 
        const phone = data.phone 
        const location = data.location

        const order = {name,email,title,price,productImg,phone,location,category}

        fetch(`${process.env.REACT_APP_PORT}/orders`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.acknowledged){
            setBookingModalData(null)
            toast.success('Order successfull',{duration:1200})
           }
        })
        .catch(error=>console.log(error));
    }
    return (
        <div>
            <input type="checkbox" id={`booking-modal${_id}`} className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative ">
                <label htmlFor={`booking-modal${_id}`} className="btn btn-sm btn-circle bg-primary absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{}</h3>
                <div>
                    <form onSubmit={handleSubmit(bookingHandle)} className="space-y-3 ng-untouched ng-pristine ng-valid">
                            <div className=" text-sm">
                                <label className="block mb-1 font-medium text-[16px]">Name</label>
                                <input {...register("name")} readOnly placeholder="Name" defaultValue={user?.displayName}  className="outline-none flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm text-lg" />
                            </div>
                            <div className=" text-sm">
                                <label className="block mb-1 font-medium text-[16px]">Email</label>
                                <input {...register("email")} readOnly placeholder="Email" defaultValue={user?.email} className="outline-none flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm text-lg" />
                            </div>
                            <div className=" text-sm">
                                <label className="block mb-1 font-medium text-[16px]">Product Item</label>
                                <input {...register("item")} readOnly placeholder="Item Name" defaultValue={title}  className="outline-none flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm text-lg" />
                            </div>
                            <div className=" text-sm">
                                <label className="block mb-1 font-medium text-[16px]">Price</label>
                                <input {...register("price")} readOnly placeholder="Price" defaultValue={`$${resalePrice}`}  className="outline-none flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm text-lg" />
                            </div>
                            <div className=" text-sm">
                                <label className="block mb-1 font-medium text-[16px]">Phone</label>
                                <input {...register("phone",{required:true})} type="phone" placeholder="Phone" className="outline-none flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm text-lg" />
                            </div>
                            <div className=" text-sm">
                                <label className="block mb-1 font-medium text-[16px]">Location</label>
                                <input {...register("location",{required:true})} type="text" placeholder="Meeting Location" className="outline-none flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm text-lg" />
                            </div>
                            <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary"> Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;