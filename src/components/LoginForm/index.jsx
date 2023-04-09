import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Forms/Button';
import { Input } from '../Forms/Input/index';
import { UserContext } from '../../contexts/UserContext.jsx';

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleAuthenticateUser(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
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

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Enter</Button>
        )}

        {error && <p>{error}</p>}
      </form>
      <Link to="/login/create-user">Create user</Link>
    </section>
  );
}
