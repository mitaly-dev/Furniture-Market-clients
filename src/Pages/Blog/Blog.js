import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react';
import Spinner from '../../Components/Spinner';
import { useState } from 'react';

const Blog = () => {
    const [blogs,setBlog]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_PORT}/blogs`)
        .then(data=>{
            setBlog(data.data)
            setIsLoading(false)
        })
        .catch(error=>console.error(error.message))
    })
    
    if(isLoading){
        return <Spinner></Spinner>
    }
    
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 min-h-screen">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    {
                        blogs.map(blog=>{
                            const {_id,answer,question} = blog
                            return <details key={_id}>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">{question}</summary>
                            <div className="px-4 pb-4">
                                <p>{answer}</p>
                            </div>
                        </details>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;