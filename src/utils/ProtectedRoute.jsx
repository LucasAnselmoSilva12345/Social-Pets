import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const { isLogged } = useContext(UserContext);

  return isLogged ? children : <Navigate to="/login" />;
};
