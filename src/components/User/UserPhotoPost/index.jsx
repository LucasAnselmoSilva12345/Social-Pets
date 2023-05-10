import { useEffect, useState } from 'react';

import { Input } from '../../Forms/Input/';
import { Button } from '../../Forms/Button/';
import { useForm } from '../../../hooks/useForm.js';
import { useAPIFetch } from '../../../hooks/useAPIFetch';
import { PHOTO_POST } from '../../../api/api.js';
import { Warning } from '../../Warning/';
import { useNavigate } from 'react-router-dom';

export function UserPhotoPost() {
  const userInputAnimalName = useForm('text');
  const userInputAnimalWeight = useForm('number');
  const userInputAnimalAge = useForm('number');
  const [img, setImg] = useState({});
  const { dataUser, loading, error, fetchAPIData } = useAPIFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (dataUser) navigate('/account');
  }, [dataUser, navigate]);

  function handlePostPetPhoto(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', userInputAnimalName.value);
    formData.append('peso', userInputAnimalWeight.value);
    formData.append('idade', userInputAnimalAge.value);

    const userToken = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, userToken);
    fetchAPIData(url, options);
  }

  function handleUpdateImgPhoto({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className="grid grid-cols-2 gap-8 mb-8">
      <form onSubmit={handlePostPetPhoto}>
        <Input
          label="Names pet"
          type="text"
          name="userInputAnimalName"
          required
          {...userInputAnimalName}
        />
        <Input
          label="Weight pet"
          type="number"
          name="userInputAnimalWeight"
          required
          {...userInputAnimalWeight}
        />
        <Input
          label="Age pet"
          type="number"
          name="userInputAnimalAge"
          required
          {...userInputAnimalAge}
        />

        <input
          type="file"
          name="img"
          id="img"
          onChange={handleUpdateImgPhoto}
          required
          className="mb-4"
        />

        {loading ? <Button disabled>Loading...</Button> : <Button>Send</Button>}

        <Warning errorMessage={error} />
      </form>

      <div>
        {img.preview && (
          <div>
            <figure>
              <img src={`${img.preview}`} alt="" />
            </figure>
          </div>
        )}
      </div>
    </section>
  );
}
