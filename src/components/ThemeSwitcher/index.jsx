import { Moon, SunDim } from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark-theme');
    } else {
      document.documentElement.classList.add('dark-theme');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="theme-switcher">
      <button onClick={handleThemeChange}>
        {theme === 'light' ? <Moon size={32} /> : <SunDim size={32} />}
      </button>
    </div>
  );
}
