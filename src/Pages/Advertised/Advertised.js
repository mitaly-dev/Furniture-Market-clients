import React from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import Addvertise from './Addvertise';
import Product from '../Categories/Products/Product';
import { useEffect } from 'react';
import SectionTitle from '../../Shared/SectionTitle';


const Advertised = () => {
    const {data:advertised=[],isError} = useQuery({
        queryKey:['advertised'],
        queryFn:async()=>{
            const res = await fetch(`${process.env.REACT_APP_PORT}/advertised`)
            const data = await res.json()
            return data
        }
    })

const content = {heads:"leasted",title:'advertise'}
    return (
        <>
       {
        advertised.length>0 &&
        <section className='px-20 py-20 bg-[#0201010d]'>
        <div>
          <SectionTitle content={content}></SectionTitle>
        </div>
         <div className='grid grid-cols-3 gap-5'>
           {
            advertised.map(advertise=><Product key={advertise._id} product={advertise}></Product>)
           }
        </div>
       </section> 
       }
       </>
    );
};

export default Advertised;