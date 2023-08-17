import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginCreateUser } from '../LoginCreateUser';
import { LoginForm } from '../LoginForm';
import { LoginPasswordLost } from '../LoginPasswordLost';
import { LoginPasswordReset } from '../LoginPasswordReset';
import { UserContext } from '../../contexts/UserContext';
import { NotFound } from '../NotFound';

export function Login() {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Navigate to="/account" />;

  return (
    <section className='grid grid-cols-1 min-h-screen before:hidden md:grid-cols-2 md:gap-8 md:before:content-[""] md:before:block md:before:bg-loginPage md:before:bg-no-repeat md:before:bg-center md:before:bg-cover'>
      <div className="max-w-full p-5 md:max-w-4/8 md:p-4 md:mt-36">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create-user" element={<LoginCreateUser />} />
          <Route path="password-lost" element={<LoginPasswordLost />} />
          <Route path="password-reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}
