import React from 'react';

export function Button({ children, ...props }) {
  return (
    <button {...props} className='min-w-1/8 py-3 px-5 text-base font-medium font-inter border-none rounded-md bg-colorYellow text-colorBrownDark box-border transition-opacity ease-in-out cursor-pointer hover:opacity-70 focus:outline-none focus:shadow-shadowButton disabled:opacity-50 disabled:cursor-wait'>
      {children}
    </button>
  );
}
