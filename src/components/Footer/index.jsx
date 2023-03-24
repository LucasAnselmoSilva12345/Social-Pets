import React from 'react';

import { ReactComponent as DogsFooter } from '../../assets/dogs.svg';
import { ThemeSwitcher } from '../ThemeSwitcher';

import style from './style.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`${style.wrapperFooter}`}>
        <DogsFooter />
        <p>Social Pets. All rights reserved</p>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}
