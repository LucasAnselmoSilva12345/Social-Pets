import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import { PhotoDelete } from '../PhotoDelete';
import { ImageSkeleton } from '../../ImageSkeleton';
import { Eye } from '@phosphor-icons/react';

import style from './style.module.css';

export function PhotoContent({ photoData }) {
  const user = useContext(UserContext);
  return (
    <div className={style.photoContainer}>
      <div className={style.photoImg}>
        <ImageSkeleton src={photoData.src} alt={photoData.title} />
      </div>

      <div className={style.photoContainerDetails}>
        <div className="flex flex-col gap-4">
          <p className="flex items-center justify-between">
            {user.data && user.data.username === photoData.author ? (
              <PhotoDelete id={photoData.id} />
            ) : (
              <Link
                to={`/profile/${photoData.author}`}
                className="text-base text-zinc-800 font-medium"
              >
                @{photoData.author}
              </Link>
            )}
            <span className="text-zinc-700 font-light text-sm flex items-center justify-center gap-1">
              <Eye />
              {photoData.acessos}
            </span>
          </p>
          <h1 className="text-6xl font-bold text-center">
            <Link to={`/photo/${photoData.id}`}>{photoData.title}</Link>
          </h1>
          <ul className="flex items-center justify-between text-sm font-medium">
            <li className="">{photoData.peso} kg</li>
            <li>{photoData.idade} ano(s)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
