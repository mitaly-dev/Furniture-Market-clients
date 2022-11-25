import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const useRole = (email) => {
    const [role,setRole] = useState('')
    const [isRoleLoading,setIsRoleLoading] = useState(true)
    const [isVerify,setIsVerify]=useState(false)
    useEffect(()=>{
        setIsRoleLoading(false)
        if(email){
            fetch(`${process.env.REACT_APP_PORT}/verifyRole?email=${email}`)
            .then(res=>res.json())
            .then(data=>{
                setIsRoleLoading(false)
                setRole(data?.role)
                setIsVerify(data.verify)
                console.log(data.verify)
            })
            .catch(error=>{
                setIsRoleLoading(false)
                console.log(error)
            })
        }
    },[email])
    return [role,isRoleLoading,isVerify]
};

export default useRole;