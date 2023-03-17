import React, { useState } from 'react';

export function PhotoGet() {
  const [photoId, setPhotoId] = useState('');

  function handleSubmitPhotoGet(event) {
    event.preventDefault();

    fetch(`https://dogsapi.origamid.dev/json/api/photo/${photoId}`)
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
    <form onSubmit={handleSubmitPhotoGet}>
      <input
        type="text"
        value={photoId}
        onChange={({ target }) => setPhotoId(target.value)}
      />
      <button>Get Photo</button>
    </form>
  );
}
