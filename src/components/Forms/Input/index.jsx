import React from 'react';

import style from './style.module.css';

export function Input({ label, type, id }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} className={style.input} type={type} />
    </div>
  );
}
