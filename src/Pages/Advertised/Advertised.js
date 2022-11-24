import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import Category from '../Categories/Category';

const Advertised = () => {
    const {data:categories=[],isError} = useQuery({
        queryKey:['categories'],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/categories`)
            const data = await res.json()
            return data
        }
    })
    return (
       <section className=' px-20 py-20 my-16 bg-[#0201010d]'>
        <div>
            <h3 className='font-jost text-4xl text-center pb-16 font-semibold'>Advertised</h3>
        </div>
         <div className='grid grid-cols-3 gap-5'>
           {
            categories.map(category=><Category key={category._id} category={category}></Category>)
           }
        </div>
       </section>
    );
};

export default Advertised;