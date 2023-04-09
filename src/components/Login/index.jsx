import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginCreateUser } from '../LoginCreateUser';
import { LoginForm } from '../LoginForm';
import { LoginPasswordLost } from '../LoginPasswordLost';
import { LoginPasswordReset } from '../LoginPasswordReset';
import { UserContext } from '../../contexts/UserContext';

export function Login() {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Navigate to="/account" />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create-user" element={<LoginCreateUser />} />
        <Route path="password-lost" element={<LoginPasswordLost />} />
        <Route path="password-reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}
