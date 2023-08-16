import { useEffect } from 'react';
import { useAPIFetch } from '../../../hooks/useAPIFetch';
import style from './style.module.css';
import { PHOTOS_GET } from '../../../api/api';
import { Warning } from '../../Warning';
import { Loading } from '../../Loading';
import { PhotoContent } from '../../Photo/PhotoContent';

export function FeedModal({ photo }) {
  const { dataUser, error, loading, fetchAPIData } = useAPIFetch();

  useEffect(() => {
    const { url, options } = PHOTOS_GET(photo.id);
    fetchAPIData(url, options);
  }, [photo, fetchAPIData]);

  return (
    <div className={style.modalContainer}>
      {error && <Warning errorMessage={error} />}
      {loading && <Loading />}

      {dataUser && <PhotoContent photoData={photo} properties={dataUser} />}
    </div>
  );
}
