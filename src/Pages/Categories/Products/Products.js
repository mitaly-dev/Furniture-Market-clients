import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
import Product from './Product';


const Products = () => {

    const {data:products=[]} = useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/categories`)
            const data = await res.json()
            return data
        }
    })
    return (
        <section className=' px-20 py-28'>
        <div className='grid grid-cols-3 gap-5'>
          {
           products.map(product=><Product key={product._id} product={product}></Product>)
          }
       </div>
      </section>
    );
};

export default Products;