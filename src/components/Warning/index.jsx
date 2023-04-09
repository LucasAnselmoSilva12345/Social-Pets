import style from './style.module.css';

export function Warning({ errorMessage }) {
  if (!errorMessage) return null;

  return <p className={style.message}>{errorMessage}</p>;
}
