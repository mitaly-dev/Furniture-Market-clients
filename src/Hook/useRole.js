import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const useRole = (email) => {
    const [role,setRole] = useState('')
    const [isRoleLoading,setIsRoleLoading] = useState(true)
    const [isVerify,setIsVerify]=useState(false)
    useEffect(()=>{
        if(email){
            fetch(`${process.env.REACT_APP_PORT}/verifyRole?email=${email}`)
            .then(res=>res.json())
            .then(data=>{
                setIsRoleLoading(false)
                setRole(data?.role)
                console.log(data.role)
                setIsVerify(data.verify)
                
            })
            .catch(error=>{
                setIsRoleLoading(false)
                console.log(error.message)
            })
        }
    },[email])
    return [role,isRoleLoading,isVerify]
};

export default useRole;