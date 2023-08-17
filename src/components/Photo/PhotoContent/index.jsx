import { Link } from 'react-router-dom';

import style from './style.module.css';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { PhotoDelete } from '../PhotoDelete';

export function PhotoContent({ photoData }) {
  const user = useContext(UserContext);
  return (
    <div className={style.photoContainer}>
      <div className={style.photoImg}>
        <img src={photoData.src} alt={photoData.title} />
      </div>

      <div className={style.photoContainerDetails}>
        <div>
          <p>
            {user.data && user.data.username === photoData.author ? (
              <PhotoDelete id={photoData.id} />
            ) : (
              <Link to={`/profile/${photoData.author}`}>
                @{photoData.author}
              </Link>
            )}
            <span>{photoData.acessos}</span>
          </p>
          <h1>
            <Link to={`/photo/${photoData.id}`}>{photoData.title}</Link>
          </h1>
          <ul>
            <li>{photoData.peso} kg</li>
            <li>{photoData.idade} ano(s)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
