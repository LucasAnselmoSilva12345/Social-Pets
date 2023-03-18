import React from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.css';

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </header>
  );
}
