import React, { useEffect, useState } from 'react';
import { UserHeaderNav } from '../UserHeaderNav/index.jsx';

import style from './style.module.css';
import { useLocation } from 'react-router-dom';

export function UserHeader() {
  const [userHeaderTitle, setUserHeaderTitle] = useState('');

  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/account/analytics':
        setUserHeaderTitle('Analytics');
        break;
      case '/account/post':
        setUserHeaderTitle('Post your photo');
        break;
      default:
        setUserHeaderTitle('My Feed');
    }
  }, [location]);

  return (
    <header className={style.userHeader}>
      <h1 className="title">{userHeaderTitle}</h1>

      <UserHeaderNav />
    </header>
  );
}
