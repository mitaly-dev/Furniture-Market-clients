import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <p>loading...</p>
    }
    if(user?.uid){
        return children
    }
    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivateRoute;