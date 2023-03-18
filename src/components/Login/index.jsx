import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginCreateUser } from '../LoginCreateUser';
import { LoginForm } from '../LoginForm';
import { LoginPasswordLost } from '../LoginPasswordLost';
import { LoginPasswordReset } from '../LoginPasswordReset';

export function Login() {
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
