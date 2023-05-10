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
    <section className="mb-4">
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
          className="relative m-0 mb-4 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        />

        {img.preview && (
          <div className="mb-4">
            <figure>
              <img
                src={`${img.preview}`}
                alt=""
                className="w-1/4 md:mt-6 md:mb-0 md:mx-auto md:flex md:items-center md:justify-center rounded-md"
              />
            </figure>
          </div>
        )}

        {loading ? <Button disabled>Loading...</Button> : <Button>Send</Button>}

        <Warning errorMessage={error} />
      </form>
    </section>
  );
}
