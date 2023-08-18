import React, { useEffect, useState } from 'react';
import { Input } from '../Forms/Input/index';
import { Button } from '../Forms/Button';
import { useForm } from '../../hooks/useForm';
import { useAPIFetch } from '../../hooks/useAPIFetch';
import { PASSWORD_RESET } from '../../api/api';
import { useNavigate } from 'react-router-dom';

export function LoginPasswordReset() {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm('password');
  const { loading, error, fetchAPIData } = useAPIFetch();

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) {
      setKey(key);
    }
    if (login) {
      setLogin(login);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await fetchAPIData(url, options);
      if (response.ok) {
        navigate('/login');
      }
    }
  }

  return (
    <section className="mt-5">
      <Head title="Reset your password" />
      <h1 className="mb-4 text-4xl font-inter font-bold text-zinc-800">
        Reset your password!
      </h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="New password"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetting...</Button>
        ) : (
          <Button>Reset the password</Button>
        )}
      </form>

      <Warning errorMessage={error} />
    </section>
  );
}
