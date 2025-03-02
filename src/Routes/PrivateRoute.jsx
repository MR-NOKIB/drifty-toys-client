import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div>Loading...</div>
    }
    if (!user) {
        return <Navigate to="/login" replace={true} state={{ from: location }}></Navigate>
    }
    return children;
};

export default PrivateRoute;