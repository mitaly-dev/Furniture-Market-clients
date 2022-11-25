import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
import Category from './Category';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Categories = () => {
  const {productRefetch,setProductRefetch} =  useContext(AuthContext)

    const {data:categories=[],isError,refetch} = useQuery({
        queryKey:['categories'],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/categories`)
            const data = await res.json()
            setProductRefetch(refetch)
            return data
        }
    })
    return (
       <section className=' px-20 py-32' style={{'backgroundImage': 'linear-gradient(90deg, #0201010d 40%, #BBCED5 0%)' }}>
         <div className='grid grid-cols-3 gap-5'>
           {
            categories.map(category=><Category key={category._id} category={category}></Category>)
           }
        </div>
       </section>
    );
};

export default Categories;