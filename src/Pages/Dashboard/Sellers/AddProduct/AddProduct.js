import React from 'react';
import toast,{ Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import moment from "moment";
import { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { imageUpload } from '../../../../API/imageUpload';



const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const time = moment().format("DD-MM-YYYY hh:mm:ss")

    const addProductHandle=(data)=>{
        const category = data.category 
        const title = data.title 
        const originalPrice = data.originalPrice 
        const resalePrice = data.resalePrice 
        const location = data.location 
        const description = data.description 
        const phone = data.phone 
        const yearsOfPurchase = data.yearsOfPurchase 
        const condition = data.condition
        const image = data.image[0]

        const formData = new FormData()
        formData.append('image',image)

        imageUpload(formData)
        .then(data=>{
            const image = data.data.display_url
            const product = {category,title,originalPrice,resalePrice,location,yearsOfPurchase,phone,condition,         description,time,image,
                available:true,
                verified:true,
                sellerEmail:user?.email,
                sellerName:user?.displayName
                }
            if(data.success){
                fetch(`${process.env.REACT_APP_PORT}/products`,{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(product)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.acknowledged){
                        reset()
                        toast.success('Added product successfull',{duration:1200})
                        navigate('/dashboard/myProducts')
                    }
                })
                .catch(error=>console.log(error.message))
            }
        })
        .catch(error=>console.log(error.message))
    }

    return (
        <div className='px-14'>
            <div className="bg-white rounded shadow-2xl p-7 sm:p-10 w-full">
                  <div className='mb-4'>
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-10 sm:text-2xl">
                      Add a product
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit(addProductHandle)} className="space-y-6 w-full ng-untouched ng-pristine ng-valid">
                    <div className='flex gap-5'>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="title" className="block mb-1 font-medium text-[16px]">Product Name</label>
                            <input {...register("title",{required:"title is required!"})} type="text" placeholder="product Name"  className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                            {errors?.title && <p className='text-red-600'>{errors.title?.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="category" className="block mb-1 font-medium text-[16px]">Select Category</label>
                            <select {...register("category",{required:"category is required!"})} className="select select-bordered outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm ">
                                <option value="bedroom" selected>bedroom</option>
                                <option value="kitchen">kitchen</option>
                                <option value="dining room">dining room</option>
                            </select>
                            {errors?.category && <p className='text-red-600'>{errors.category?.message}</p>}
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="originalPrice" className="block mb-1 font-medium text-[16px]">Original Price</label>
                            <input {...register("originalPrice",{required:"Original Price is required!"})} type="" placeholder="original Price"  className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                            {errors?.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="resalePrice" className="block mb-1 font-medium text-[16px]">Resale Price</label>
                            <input {...register("resalePrice",{required:"Resale Price is required!"})} type="" placeholder="Resale Price"  className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                            {errors?.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>}
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="location" className="block mb-1 font-medium text-[16px]">Location</label>
                            <input {...register("location",{required:"location is required!"})} type="text" placeholder="Location"  className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                            {errors?.location && <p className='text-red-600'>{errors.location?.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="yearsOfPurchase" className="block mb-1 font-medium text-[16px]">Years Of Purchase</label>
                            <input {...register("yearsOfPurchase",{required:"Years Of Purchase is required!"})} type="number" placeholder="Years Of Purchase" className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                            {errors?.yearsOfPurchase && <p className='text-red-600'>{errors.yearsOfPurchase?.message}</p>}
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="condition" className="block mb-1 font-medium text-[16px]">Condition</label>
                            <input {...register("condition",{required:"condition is required!"})} type="text" placeholder="Condition"  className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                            {errors?.condition && <p className='text-red-600'>{errors.condition?.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="image" className="block mb-1 font-medium text-[16px]">Product Image</label>
                            <input {...register("image",{required:"image is required!"})} type="file" className="file-input file-input-bordered w-full" />
                            {errors?.image && <p className='text-red-600'>{errors.image?.message}</p>}
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="phone" className="block mb-1 font-medium text-[16px]">Phone</label>
                            <input {...register("phone",{required:"phone is required!"})} type="phone" placeholder="Phone"  className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                            {errors?.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="description" className="block mb-1 font-medium text-[16px]">Description</label>
                            <textarea  {...register("description",{required:"description is required!"})} cols="30" rows="3" className='outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm '></textarea>
                            {errors?.description && <p className='text-red-600'>{errors.description?.message}</p>}
                        </div>
                    </div>
                        <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary"> Login</button>
                    </form>
            </div>
        </div>
    );
};

export default AddProduct;