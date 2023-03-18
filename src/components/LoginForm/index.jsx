import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleAuthenticateUser(event) {
    event.preventDefault();

    if (username.length === 0 || password.length === 0) return;

    const user = {
      username,
      password,
    };

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleAuthenticateUser}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          placeholder="Username"
        />

        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="**********"
        />

        <button>Enter</button>
      </form>
      <Link to="/login/create-user">Create user</Link>
    </section>
  );
}
