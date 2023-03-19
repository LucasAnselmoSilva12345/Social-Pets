import React from 'react';

import { ReactComponent as DogsFooter } from '../../assets/dogs.svg';

import style from './style.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <DogsFooter />
      <p>Social Pets. All rights reserved</p>
    </footer>
  );
}
