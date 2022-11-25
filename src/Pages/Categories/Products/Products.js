import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
import Product from './Product';
import { useLoaderData } from 'react-router-dom';


const Products = () => {
    const products = useLoaderData()
    return (
        <section className=' px-20 py-28 bg-[#FAF8F8]'>
        <div className='grid grid-cols-3 gap-8'>
          {
           products.map(product=><Product key={product._id} product={product}></Product>)
          }
       </div>
      </section>
    );
};

export default Products;