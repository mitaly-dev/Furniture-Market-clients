import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
const { register, handleSubmit, reset, formState: { errors } } = useForm();

const BookingModal = ({product,setBookingModalData}) => {
    const {title,verified,sellerEmail,location,sellerName,time,yearsOfPurchase,condition,category,originalPrice,resalePrice,_id,image} = product
    const {user,loading} = useContext(AuthContext)

    return (
        <div>
            <input type="checkbox" id={`booking-modal${_id}`} className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor={`booking-modal${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{}</h3>
                <div>
                <form onSubmit={handleSubmit(createUserHandle)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block mb-1 font-medium text-[16px]">Name</label>
                            <input {...register("name",{required:"Name is required!"})} type="text" placeholder="Name"  className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block mb-1 font-medium text-[16px]">Email</label>
                            <input {...register("email",{
                                required:"Email is required",
                                pattern:{value:/\S+@\S+\.\S+/,message:'Email is not valid!'}
                                })} type="text" placeholder="Email" className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                        </div>
                        <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary"> Register</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;