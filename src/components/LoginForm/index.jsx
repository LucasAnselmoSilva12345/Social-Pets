import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST } from '../../api/api.js';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Forms/Button';
import { Input } from '../Forms/Input/index';

export function LoginForm() {
  const username = useForm();
  const password = useForm('password');

  async function handleAuthenticateUser(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleAuthenticateUser}>
        <Input
          id="username"
          label="Username"
          type="text"
          required
          {...username}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          required
          {...password}
        />

        <Button>Enter</Button>
      </form>
      <Link to="/login/create-user">Create user</Link>
    </section>
  );
}
