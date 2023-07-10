import { Link } from 'react-router-dom';
import { PhotoComments } from '../PhotoComments';

export function PhotoContent({ photoData }) {
  const { photo, comments } = photoData;
  return (
    <div className="">
      <div>
        <img src={photo.src} alt={photo.title} />
      </div>

      <div>
        <div>
          <p>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            <span>{photo.acessos}</span>
          </p>
          <h1>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul>
            <li>{photo.peso}</li>
            <li>{photo.idade}</li>
          </ul>
        </div>
      </div>

      <PhotoComments photoID={photo.id} comments={comments} />
    </div>
  );
}
