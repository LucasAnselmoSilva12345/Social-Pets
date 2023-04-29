import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Forms/Button';
import { Input } from '../Forms/Input/index';
import { UserContext } from '../../contexts/UserContext.jsx';
import { Warning } from '../Warning';

import style from './style.module.css';

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
      <h1 className="text-5xl font-inter my-4 mx-0 relative z-1 after:content-[''] after:block after:w-6 after:h-6 after:absolute after:bottom-1 after:-left-4px after:rounded after:bg-colorYellow after:z-sub">
        Login
      </h1>
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
        <Link className='min-w-1/8 py-3 px-5 text-base font-medium font-inter border-none rounded-md bg-colorYellow text-colorBrownDark box-border transition-opacity ease-in-out cursor-pointer hover:opacity-70 focus:outline-none focus:shadow-shadowButton disabled:opacity-50 disabled:cursor-wait' to="/login/create-user">
          Create account
        </Link>
      </div>
    </section>
  );
}
