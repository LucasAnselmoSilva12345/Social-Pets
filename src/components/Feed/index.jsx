import { useState } from 'react';
import { FeedModal } from './FeedModal';
import { FeedPhotos } from './FeedPhotos';

export function Feed() {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} />}

      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
}
