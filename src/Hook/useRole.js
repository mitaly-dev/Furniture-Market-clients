import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const useRole = (email) => {
    const [role,setRole] = useState('')
    const [isRoleLoading,setIsRoleLoading] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`${process.env.REACT_APP_PORT}/verifyRole?email=${email}`)
            .then(res=>res.json())
            .then(data=>{
                setIsRoleLoading(false)
                setRole(data.role)
            })
            .catch(error=>{
                setIsRoleLoading(false)
                console.log(error)
            })
        }
    },[email])
    return [role,isRoleLoading]
};

export default useRole;