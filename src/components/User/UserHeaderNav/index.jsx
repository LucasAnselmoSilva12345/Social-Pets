import { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

import { ReactComponent as PhotoFeedSVG } from '../../../assets/feed.svg';
import { ReactComponent as AnalyticsSVG } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as Logout } from '../../../assets/sair.svg';

import style from './style.module.css';
import { useMedia } from '../../../hooks/useMedia.js';

export function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function activeMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu de opções do usuário"
          onClick={activeMobileMenu}
          className={`${style.mobileButton} ${
            mobileMenu && style.mobileButtonActive
          }`}
        ></button>
      )}
      <nav
        className={`${mobile ? style.navMobile : style.nav} ${
          mobileMenu && style.navMobileActive
        }`}
      >
        <NavLink to="/account" end>
          <PhotoFeedSVG />
          {mobile && <p>My photos</p>}
        </NavLink>
        <NavLink to="/account/photo-post">
          <AddPhoto />
          {mobile && <p>Add photo</p>}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && <p>Logout</p>}
        </button>
      </nav>
    </>
  );
}
