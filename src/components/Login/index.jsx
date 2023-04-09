import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginCreateUser } from '../LoginCreateUser';
import { LoginForm } from '../LoginForm';
import { LoginPasswordLost } from '../LoginPasswordLost';
import { LoginPasswordReset } from '../LoginPasswordReset';
import { UserContext } from '../../contexts/UserContext';

import style from './style.module.css';

export function Login() {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Navigate to="/account" />;

  return (
    <section className={style.login}>
      <div className={style.formsPage}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create-user" element={<LoginCreateUser />} />
          <Route path="password-lost" element={<LoginPasswordLost />} />
          <Route path="password-reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
}
