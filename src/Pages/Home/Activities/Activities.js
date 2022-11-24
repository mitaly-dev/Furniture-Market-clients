import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import Activity from './Activity';

const Activities = () => {

    const {data:activities=[],isError} = useQuery({
        queryKey:['categories'],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/activities`)
            const data = await res.json()
            return data
        }
    })

    return (
        <section className=' px-20 py-28'>
         <div className='grid grid-cols-4 gap-10'>
           {
            
          activities.map(activity=><Activity key={activity._id} activity={activity}></Activity>)
           }
        </div>
       </section>
    );
};

export default Activities;