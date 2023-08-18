import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Button } from '../Forms/Button';
import { Input } from '../Forms/Input/index';
import { UserContext } from '../../contexts/UserContext.jsx';
import { Warning } from '../Warning';
import { Head } from '../Head/index';

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
      <Head title="Login" />
      <h1 className="text-5xl font-inter my-4 mx-0 relative z-1 after:content-[''] after:block after:w-6 after:h-6 after:absolute after:bottom-1 after:-left-4px after:rounded after:bg-colorYellow after:z-sub">
        Login
      </h1>
      <form onSubmit={handleAuthenticateUser} className="mb-8">
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

      <Link
        className="inline-block py-2 px-0 text-base text-colorMediumDark transition-all ease-in-out underline hover:text-colorBlack"
        to="/login/lost-password"
      >
        Lost password?
      </Link>

      <div className="mt-16 mb-4">
        <h2 className='text-3xl font-bold after:content-[""] after:block after:bg-colorGrayDark after:h-2 after:w-1/5 after:rounded'>
          Register
        </h2>
        <p className="mt-8 mb-8">If you don't have an account, register now!</p>
        <Link
          className="min-w-1/8 py-3 px-5 text-base font-medium font-inter border-none rounded-md bg-colorYellow text-colorBrownDark box-border transition-opacity ease-in-out cursor-pointer hover:opacity-70 focus:outline-none focus:shadow-shadowButton disabled:opacity-50 disabled:cursor-wait"
          to="/login/create-user"
        >
          Create account
        </Link>
      </div>
    </section>
  );
}
