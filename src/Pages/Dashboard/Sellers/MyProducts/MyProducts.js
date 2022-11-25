import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
  import toast from 'react-hot-toast';

const MyProducts = () => {
    const {data:myproducts=[],refetch} = useQuery({
        queryKey:['myProducts'],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/myProducts`)
            const data = await res.json()
            return data
        }
    })
    
    return (
        <div>
           {
            myproducts.length
           }
        </div>
    );
};

export default MyProducts;