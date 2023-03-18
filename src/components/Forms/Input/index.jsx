import React from 'react';

import style from './style.module.css';

export function Input({
  id,
  label,
  type,
  required,
  value,
  onChange,
  error,
  onBlur,
}) {
  return (
    <div className={style.wrapper}>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={style.input}
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}
