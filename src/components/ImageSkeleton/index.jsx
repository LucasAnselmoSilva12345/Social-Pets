import { useState } from 'react';
import style from './style.module.css';

export function ImageSkeleton({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className="grid">
      {skeleton && <div className={style.skeleton}></div>}

      <img onLoad={handleLoad} className={style.img} alt={alt} {...props} />
    </div>
  );
}
