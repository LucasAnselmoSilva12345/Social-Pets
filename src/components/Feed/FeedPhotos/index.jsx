import { FeedPhotoItem } from '../FeedPhotoItem';
import { useAPIFetch } from '../../../hooks/useAPIFetch.js';
import { useEffect } from 'react';
import { PHOTOS_GET } from '../../../api/api.js';
import { Warning } from '../../Warning';
import { Loading } from '../../Loading';

export function FeedPhotos() {
  const { dataUser, loading, error, fetchAPIData } = useAPIFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await fetchAPIData(url, options);
    }
    fetchPhotos();
  }, [fetchAPIData]);

  if (error) return <Warning errorMessage={error} />;
  if (loading) return <Loading />;

  if (!dataUser) return null;

  console.log(dataUser);

  return (
    <ul className="grid grid-cols-1 gap-4 mb-4 justify-items-center md:grid-cols-2 lg:grid-cols-3">
      {dataUser.map((photo) => (
        <FeedPhotoItem
          key={photo.id}
          srcPhoto={photo.src}
          altPhoto={photo.title}
          totalAccess={photo.acessos}
        />
      ))}
    </ul>
  );
}
