import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Forms/Button';
import { Input } from '../Forms/Input/index';
import { UserContext } from '../../contexts/UserContext.jsx';
import { Warning } from '../Warning';

import style from './style.module.css';
import styleBtn from '../Forms/Button/style.module.css';

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
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleAuthenticateUser} className={style.form}>
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

        {error && <Warning errorMessage={error} />}
      </form>

      <Link className={style.lostPassword} to="/login/lost-password">
        Lost password?
      </Link>

      <div className={style.register}>
        <h2 className={style.subtitle}>Register</h2>
        <p className={style.paragraph}>
          If you don't have an account, register now!
        </p>
        <Link className={styleBtn.button} to="/login/create-user">
          Create account
        </Link>
      </div>
    </section>
  );
}
