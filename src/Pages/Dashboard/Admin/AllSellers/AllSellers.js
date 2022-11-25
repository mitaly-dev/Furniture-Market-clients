import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'

const AllSellers = () => {
    const {data:sellers=[],refetch} = useQuery({
        queryKey:['allsellers'],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/allsellers`)
            const data = await res.json()
            return data
        }
    })

    const deleteSeller=(id)=>{
        fetch(`${process.env.REACT_APP_PORT}/allsellers/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                refetch()
            }
        })
        .catch(error=>console.log(error))
    }

    return  (
        <div className="overflow-x-auto px-14">
        <table className="table rounded-lg w-full border-2 border-primary">
          <thead>
            <tr className='text-xl'>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
            sellers.map(seller=>{
                console.log(seller)
                const {name,email,verify,_id} = seller
                return  <tr key={_id}>
                            <td  className='font-semibold capitalize'>{name}</td>
                            <td  className='font-semibold'>{email}</td>
                            <td>
                            <button onClick={()=>deleteSeller(_id)} className='py-1 px-4 rounded-lg bg-primary text-white font-semibold'>Delete</button>
                            </td>
                            <td className='font-semibold text-green-700 '>
                                {
                                    verify? "Verified" : <button className='py-1 px-4 rounded-lg bg-primary text-white font-semibold'>Verify</button>
                                }
                            </td>
                        </tr>
            })
            }
          </tbody>
        </table>
      </div>
    );
};

export default AllSellers;