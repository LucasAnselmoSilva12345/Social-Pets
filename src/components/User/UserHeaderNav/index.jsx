import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

import { ReactComponent as PhotoFeedSVG } from '../../../assets/feed.svg';
import { ReactComponent as AnalyticsSVG } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as Logout } from '../../../assets/sair.svg';

import style from './style.module.css';

export function UserHeaderNav() {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={style.nav}>
      <NavLink to="/account" end>
        <PhotoFeedSVG />
        {mobile && <p>My photos</p>}
      </NavLink>
      <NavLink to="/account/analytics">
        <AnalyticsSVG />
        {mobile && <p>Analytics</p>}
      </NavLink>
      <NavLink to="/account/post">
        <AddPhoto />
        {mobile && <p>Add photo</p>}
      </NavLink>
      <button onClick={userLogout}>
        <Logout />
        {mobile && <p>Logout</p>}
      </button>
    </nav>
  );
}
