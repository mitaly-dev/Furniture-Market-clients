import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext)
    
    const createUserHandle=(data)=>{
      console.log(user)
       
    }
    return (
        <div className="relative">
        <img
          src="https://i.ibb.co/McgcXpd/spacejoy-Yn-LJ3r-M4-Vt-I-unsplash.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl xl:px-8 xl:w-6/12 m-auto">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <div className='flex justify-between mb-4'>
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                       logIn
                    </h3>
                    <Link to="/register" className="mb-4 text-xl sm:text-center sm:mb-6 sm:text-xl italic text-primary">
                        Create an account 
                    </Link>
                  </div>
                  <form onSubmit={handleSubmit(createUserHandle)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block mb-1 font-medium text-[16px]">Name</label>
                            <input {...register("name")} type="text" placeholder="Name"  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block mb-1 font-medium text-[16px]">Email</label>
                            <input {...register("email")} type="text" placeholder="Email" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                        </div>
                        <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary"> Register</button>
                        </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;

