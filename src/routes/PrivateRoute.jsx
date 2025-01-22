import useAuth from '@/hooks/useAuth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader } from "lucide-react";

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth()
    const location = useLocation()
  
    if (loading){
        return(
            <div className="flex justify-center items-center h-96">
        <Loader className="animate-spin text-gray-400 w-10 h-10" />
      </div>
        )
    }
    if (user) return children
    return <Navigate to='/login' state={{ from: location }} replace='true' />
};

export default PrivateRoute;