import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Order from '../MyOrders/Order';


const WishList = () => {
    const {user} = useContext(AuthContext)
    const {data:wishList=[],refetch} = useQuery({
        queryKey:['/wishList',user?.email],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/wishList?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div className="flex flex-col max-w-3xl m-auto p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <ul className="flex flex-col divide-y divide-gray-700">
            {
                wishList.map(order=><Order key={order._id} order={order}></Order>)
            }
            </ul>
        </div>
    );
};

export default WishList;