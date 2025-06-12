import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import Spiner from '../components/Spiner';
const PrivateRoute = ({children}) => {
    const  {user, loading} = use(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading){
        return <Spiner></Spiner>
    }
    
    if(!user){
       return <Navigate to="/login" state={location.pathname}></Navigate>
    }
        return children
};

export default PrivateRoute;