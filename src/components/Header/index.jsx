import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { UserContext } from '../../contexts/UserContext';

import style from './style.module.css';

export function Header() {
  const { dataUser } = useContext(UserContext);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={style.logoImg}>
          <Dogs />
        </Link>

        {dataUser ? (
          <Link to="/account" className={style.login}>
            {dataUser.nome}
          </Link>
        ) : (
          <Link to="/login" className={style.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
