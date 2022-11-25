import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'

const AllBuyers = () => {
    const {data:buyers=[],refetch} = useQuery({
        queryKey:['allbuyers'],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/allbuyers`)
            const data = await res.json()
            return data
        }
    })

    const deleteBuyer=(id)=>{
        const sure = window.confirm('are you sure you want to delete?')
        if(sure){
          fetch(`${process.env.REACT_APP_PORT}/allbuyers/${id}`,{
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
    }


    return  (
        <div className="overflow-x-auto px-14">
        <table className="table rounded-lg w-full border-2 border-primary">
          <thead>
            <tr className='text-xl'>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
            buyers.map(buyer=>{
                const {name,email,image,_id} = buyer
                return  <tr key={_id}>
                            <td>
                                <div className="avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={image} alt="buyer-image"/>
                                    </div>
                                </div>
                            </td>
                            <td className='font-semibold capitalize'>{name}</td>
                            <td className='font-semibold'>{email}</td>
                            <td>
                            <button onClick={()=>deleteBuyer(_id)} className='py-1 px-4 rounded-lg bg-primary text-white font-semibold'>Delete</button>
                            </td>
                        </tr>
            })
            }
          </tbody>
        </table>
      </div>
    );
};

export default AllBuyers;