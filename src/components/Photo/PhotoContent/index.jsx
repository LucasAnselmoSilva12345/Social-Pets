import { Link } from 'react-router-dom';

import style from './style.module.css';

export function PhotoContent({ photoData }) {
  return (
    <div className={style.photoContainer}>
      <div className={style.photoImg}>
        <img src={photoData.src} alt={photoData.title} />
      </div>

      <div className={style.photoContainerDetails}>
        <div>
          <p>
            <Link to={`/profile/${photoData.author}`}>@{photoData.author}</Link>
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
