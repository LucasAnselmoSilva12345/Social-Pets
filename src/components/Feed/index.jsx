import { useState } from 'react';
import { FeedModal } from './FeedModal';
import { FeedPhotos } from './FeedPhotos';

export function Feed() {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div>
      <h1 className="mb-8 text-5xl font-bold">Feed</h1>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
}
