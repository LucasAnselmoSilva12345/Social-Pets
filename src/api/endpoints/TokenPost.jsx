import React, { useState } from 'react';

export function TokenPost() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  function handleSubmitTokenPost(event) {
    event.preventDefault();

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
        setToken(json.token);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmitTokenPost}>
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
        placeholder="********"
      />

      <button>Enviar</button>

      <h4>{token && <p>Token: {token}</p>}</h4>
    </form>
  );
}
