import React from 'react';
import {
  useQuery,
} from '@tanstack/react-query'
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const AllSellers = () => {
  const {logOut} = useContext(AuthContext)
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
    
    const verifyHandle=(email)=>{
      fetch(`${process.env.REACT_APP_PORT}/users/verify?email=${email}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json',
          authorization:`Bearer ${localStorage.getItem('furniture-token')}`
        },
        body:JSON.stringify({verify:true})
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.acknowledged){
          toast.success('verify successfull',{duration:1200})
          refetch()
        }
        else{
          toast.error(data.message,{duration:1200})
          logOut()
        }
      })
      .catch(error=>{
        console.log(error.message)
        toast.error(error.message,{duration:1200})
      })
    }

    return  (
        <div className="overflow-x-auto px-4 sm:px-12">
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
                const {name,email,verify,_id} = seller
                return  <tr key={_id}>
                    <td className='font-semibold capitalize flex items-center'>{name} 
                    {
                    verify && <img src="https://i.ibb.co/D8SPXJg/verified-2.png" alt="" className='w-4 h-4 ml-2' />
                    }
                    </td>
                    <td  className='font-semibold'>{email}</td>
                    <td>
                    <button onClick={()=>deleteSeller(_id)} className='py-1 px-4 rounded-lg bg-primary text-white font-semibold'>Delete</button>
                    </td>
                    <td className='font-semibold text-green-700 '>
                        {
                            verify? "Verified" : <button onClick={()=>verifyHandle(email)} className='py-1 px-4 rounded-lg bg-primary text-white font-semibold'>Verify</button>
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