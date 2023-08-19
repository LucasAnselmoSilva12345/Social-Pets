import { FeedPhotoItem } from '../FeedPhotoItem';
import { useAPIFetch } from '../../../hooks/useAPIFetch.js';
import { useEffect } from 'react';
import { PHOTOS_GET } from '../../../api/api.js';
import { Warning } from '../../Warning';
import { Loading } from '../../Loading';

export function FeedPhotos({ page, user, setModalPhoto, setInfinite }) {
  const { dataUser, loading, error, fetchAPIData } = useAPIFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 300;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await fetchAPIData(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [fetchAPIData, user, page, setInfinite]);

  if (error) return <Warning errorMessage={error} />;
  if (loading) return <Loading />;
  if (!dataUser) return null;

  return (
    <ul className="grid grid-cols-1 gap-4 mb-4 justify-items-center md:grid-cols-2 lg:grid-cols-3">
      {dataUser.map((photo) => (
        <FeedPhotoItem
          key={photo.id}
          photo={photo}
          authorPhoto={photo.author}
          srcPhoto={photo.src}
          altPhoto={photo.title}
          totalAccess={photo.acessos}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
}
