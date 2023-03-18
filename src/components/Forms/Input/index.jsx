import React from 'react';

import style from './style.module.css';

export function Input({ id, label, type, value, onChange }) {
  return (
    <div className={style.wrapper}>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className={style.input}
      />
    </div>
  );
}
