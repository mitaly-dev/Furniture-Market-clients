import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
  import toast from 'react-hot-toast';
import ReportProduct from './ReportProduct';

const ReportedItem = () => {
    const {data:products=[],refetch} = useQuery({
        queryKey:['reportedProduct'],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/reportedProduct`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div className="flex flex-col max-w-3xl m-auto p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <ul className="flex flex-col divide-y divide-gray-700">
            {
                products.map(product=><ReportProduct key={product._id} product={product} refetch={refetch}></ReportProduct>)
            }
            </ul>
        </div>
    );
};

export default ReportedItem;