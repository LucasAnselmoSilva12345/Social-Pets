import React from 'react';

import style from './style.module.css';

export function Button({ children, ...props }) {
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
}
