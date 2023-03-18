import React from 'react';

import style from './style.module.css';

export function Input({ id, label, type }) {
  return (
    <div className={style.wrapper}>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <input id={id} name={id} className={style.input} type={type} />
    </div>
  );
}
