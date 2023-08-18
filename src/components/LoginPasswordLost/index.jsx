import React from 'react';
import { Input } from '../Forms/Input/index';
import { Button } from '../Forms/Button';
import { useForm } from '../../hooks/useForm';
import { useAPIFetch } from '../../hooks/useAPIFetch';
import { PASSWORD_LOST } from '../../api/api';
import { Warning } from '../Warning';
import { Head } from '../Head';

export function LoginPasswordLost() {
  const login = useForm();
  const { dataUser, loading, error, fetchAPIData } = useAPIFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: `${window.location.host}/login/lost-password`,
      });
      const { json } = await fetchAPIData(url, options);
    }
  }

  return (
    <section className="mt-5">
      <Head title="Lost password" />
      <h1 className="mb-4 text-4xl font-inter font-bold text-zinc-800">
        Lost your password ?
      </h1>
      {dataUser ? (
        <p className="text-green-600">{dataUser}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / User" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send email</Button>
          )}
        </form>
      )}

      <Warning errorMessage={error} />
    </section>
  );
}
