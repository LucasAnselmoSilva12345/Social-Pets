import React, { useState } from 'react';

export function UserPost() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmitUserPost(event) {
    event.preventDefault();

    const user = {
      username,
      email,
      password,
    };

    fetch('https://dogsapi.origamid.dev/json/api/user', {
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
    <form onSubmit={handleSubmitUserPost}>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        placeholder="Username"
      />

      <input
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="E-mail"
      />

      <input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        placeholder="********"
      />

      <button>Enviar</button>
    </form>
  );
}
