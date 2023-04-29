import React from 'react';

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
    <div className='mt-2 mr-0 mb-4 ml-0'>
      <label htmlFor={id} className='block pb-2 text-base'>
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
        className='w-full p-3 text-base border border-solid border-colorInput rounded-md bg-colorInput transition-all hover:outline-none hover:border-2 hover:border-solid hover:border-colorYellow focus:outline-none focus:border-2 focus:border-solid focus:border-colorYellow'
      />
      {error && <p className='mt-1 text-sm font-bold text-colorError'>{error}</p>}
    </div>
  );
}
