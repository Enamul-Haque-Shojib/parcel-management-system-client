import React from 'react';
import { useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const { user, loading } = useAuth()
    const location = useLocation()
  
    if (loading) return <LoadingSpinner />
    if (user) return children
    return <Navigate to='/login' state={{ from: location }} replace='true' />
};

export default PrivateRoute;