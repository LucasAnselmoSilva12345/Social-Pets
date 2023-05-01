import { Moon, SunDim } from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';

import style from './style.module.css';

export function ThemeSwitcher() {
  const root = window.document.documentElement;
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={style.themeSwitcher}>
      <button onClick={handleThemeChange}>
        {theme === 'light' ? (
          <Moon className={style.MoonIcon} size={32} />
        ) : (
          <SunDim className={style.SunIcon} size={32} />
        )}
      </button>
    </div>
  );
}
