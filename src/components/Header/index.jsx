import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';

import style from './style.module.css';

export function Header() {
  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={style.logoImg}>
          <Dogs />
        </Link>
        <Link to="/login" className={style.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}
