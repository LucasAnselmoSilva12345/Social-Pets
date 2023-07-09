import { useEffect } from 'react';
import { useAPIFetch } from '../../../hooks/useAPIFetch.js';
import { PHOTO_GET } from '../../../api/api.js';
import { Warning } from '../../Warning/index.jsx';
import { Loading } from '../../Loading/index.jsx';
import { PhotoContent } from '../../Photo/PhotoContent/index.jsx';

export function FeedModal({ photo }) {
  const { dataUser, loading, error, fetchAPIData } = useAPIFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    fetchAPIData(url, options);
  }, [photo, fetchAPIData]);

  return (
    <div>
      {error && <Warning errorMessage={error} />}
      {loading && <Loading />}

      {dataUser && <PhotoContent photoData={dataUser} />}
    </div>
  );
}
