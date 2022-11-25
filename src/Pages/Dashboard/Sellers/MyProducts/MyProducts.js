import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
  import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Spinner from '../../../../Components/Spinner';

const MyProducts = () => {
    const {user,loading} = useContext(AuthContext)
    
    const {data:products=[],isLoading,refetch}=useQuery({
        queryKey:['/products',user?.email],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/products?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div>
           {
            products.length
           }
        </div>
    );
};

export default MyProducts;