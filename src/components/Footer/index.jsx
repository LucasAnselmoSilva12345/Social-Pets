import React from 'react';

import { ReactComponent as DogsFooter } from '../../assets/dogs.svg';
import { ThemeSwitcher } from '../ThemeSwitcher';

export function Footer() {
  return (
    <footer className='py-12 px-4 bg-colorYellow text-colorTextBase transition-all ease-in-out'>
      <div className='max-w-8xl my-0 mx-auto py-0 px-1 flex items-center justify-between md:py-0 md:px-4'>
        <DogsFooter />
        <p>Social Pets. All rights reserved</p>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}
