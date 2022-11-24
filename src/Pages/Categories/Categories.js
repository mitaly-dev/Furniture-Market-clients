import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import Category from './Category';

const Categories = () => {
    const {data:categories=[],isError} = useQuery({
        queryKey:['categories'],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/categories`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='grid grid-cols-3 gap-5 px-12'>
           {
            categories.map(category=><Category key={category._id} category={category}></Category>)
           }
        </div>
    );
};

export default Categories;