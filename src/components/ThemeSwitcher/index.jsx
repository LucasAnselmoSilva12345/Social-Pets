import { Moon, SunDim } from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';

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
    <div>
      <button
        className="border-none cursor-pointer bg-none"
        onClick={handleThemeChange}
      >
        {theme === 'light' ? (
          <Moon className="text-grayBlueDark" size={32} />
        ) : (
          <SunDim className="dark:text-txtDarkMedium" size={32} />
        )}
      </button>
    </div>
  );
}
