import React, { useState } from 'react';

export function PhotoPost() {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');

  function handleSubmitPhotoPost(event) {
    event.preventDefault();

    const submissionDataForm = new FormData();
    submissionDataForm.append('img', image);
    submissionDataForm.append('nome', name);
    submissionDataForm.append('peso', weight);
    submissionDataForm.append('idade', age);

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: submissionDataForm,
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
    <form onSubmit={handleSubmitPhotoPost}>
      <input
        type="text"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />

      <input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
        placeholder="Nome"
      />

      <input
        type="text"
        value={weight}
        onChange={({ target }) => setWeight(target.value)}
        placeholder="Peso"
      />

      <input
        type="text"
        value={age}
        onChange={({ target }) => setAge(target.value)}
        placeholder="Idade"
      />

      <input type="file" onChange={({ target }) => setImage(target.files[0])} />

      <button>Enviar</button>
    </form>
  );
}
