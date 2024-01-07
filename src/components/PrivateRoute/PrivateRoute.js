import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';


const PrivateRoute = ({ element, ...rest }) => {
    const { currentUser } = useContext(AuthContext);

    return (
        <Route {...rest} element={currentUser ? element : <Navigate to="/login" />} />
    );
};

export default PrivateRoute;
