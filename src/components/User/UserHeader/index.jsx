import React, { useEffect, useState } from 'react';
import { UserHeaderNav } from '../UserHeaderNav/index.jsx';

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
      case '/account/photo-post':
        setUserHeaderTitle('Post your photo');
        break;
      default:
        setUserHeaderTitle('My Feed');
    }
  }, [location]);

  return (
    <div className="mt-8 mr-0 mb-8 ml-0 relative grid grid-cols-[1fr_auto] items-center">
      <h1 className="text-5xl font-inter my-4 mx-0 relative z-1 after:content-[''] after:block after:w-6 after:h-6 after:absolute after:bottom-1 after:-left-4px after:rounded after:bg-colorYellow after:z-sub">
        {userHeaderTitle}
      </h1>

      <UserHeaderNav />
    </div>
  );
}
