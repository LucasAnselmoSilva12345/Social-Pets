import { useEffect } from 'react';
import { useAPIFetch } from '../../../hooks/useAPIFetch';
import style from './style.module.css';
import { PHOTOS_GET } from '../../../api/api';
import { Warning } from '../../Warning';
import { Loading } from '../../Loading';
import { PhotoContent } from '../../Photo/PhotoContent';

export function FeedModal({ photo, setModalPhoto }) {
  const { dataUser, error, loading, fetchAPIData } = useAPIFetch();

  useEffect(() => {
    const { url, options } = PHOTOS_GET(photo.id);
    fetchAPIData(url, options);
  }, [photo, fetchAPIData]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={style.modalContainer} onClick={handleOutsideClick}>
      {error && <Warning errorMessage={error} />}
      {loading && <Loading />}

      {dataUser && <PhotoContent photoData={photo} properties={dataUser} />}
    </div>
  );
}
