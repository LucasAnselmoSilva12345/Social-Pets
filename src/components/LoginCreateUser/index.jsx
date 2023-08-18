import React, { useContext } from 'react';
import { Input } from '../Forms/Input/index';
import { Button } from '../Forms/Button/index';
import { useForm } from '../../hooks/useForm';
import { USER_POST } from '../../api/api';
import { UserContext } from '../../contexts/UserContext';
import { useAPIFetch } from '../../hooks/useAPIFetch';
import { Warning } from '../Warning';
import { Head } from '../Head';

export function LoginCreateUser() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = useContext(UserContext);
  const { fetchAPIData, loading, error } = useAPIFetch();

  async function createUserAccount(event) {
    event.preventDefault();

    if (!email.validate() || !password.validate() || !username.validate()) {
      return false;
    }

    const dataUser = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    const { url, options } = USER_POST(dataUser);

    const { response } = await fetchAPIData(url, options);

    if (!response.ok) {
      console.log('Error');
      return false;
    }

    userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head title="Create user" />
      <h1 className="text-5xl font-inter my-4 mx-0 relative z-1 after:content-[''] after:block after:w-6 after:h-6 after:absolute after:bottom-1 after:-left-4px after:rounded after:bg-colorYellow after:z-sub">
        Register
      </h1>

      <form onSubmit={createUserAccount}>
        <Input
          type="text"
          id="username"
          name="username"
          required
          label="Username"
          {...username}
        />
        <Input
          type="email"
          id="email"
          name="email"
          label="E-mail"
          required
          {...email}
        />
        <Input
          type="password"
          id="password"
          name="password"
          label="Password"
          required
          {...password}
        />

        {loading ? (
          <Button disabled>Registering...</Button>
        ) : (
          <Button>Register</Button>
        )}

        <Warning errorMessage={error} />
      </form>
    </section>
  );
}
