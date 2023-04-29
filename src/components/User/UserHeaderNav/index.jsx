import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

import { ReactComponent as PhotoFeedSVG } from '../../../assets/feed.svg';
import { ReactComponent as AnalyticsSVG } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as Logout } from '../../../assets/sair.svg';
export function UserHeaderNav() {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <nav id="userHeaderNav" className="grid grid-cols-4 gap-4">
      <NavLink
        to="/account"
        end
        className="bg-colorInput h-10 w-10 flex items-center justify-center border border-solid border-transparent rounded-sm transition-all ease-in-out cursor-pointer hover:bg-colorWhite hover:border-colorTextBase hover:outline-none hover:shadow-shadowUserHeaderNav focus:bg-colorWhite focus:border-colorTextBase focus:outline-none focus:shadow-shadowUserHeaderNav"
      >
        <PhotoFeedSVG />
        {mobile && <p>My photos</p>}
      </NavLink>
      <NavLink
        to="/account/analytics"
        className="bg-colorInput h-10 w-10 flex items-center justify-center border border-solid border-transparent rounded-sm transition-all ease-in-out cursor-pointer hover:bg-colorWhite hover:border-colorTextBase hover:outline-none hover:shadow-shadowUserHeaderNav focus:bg-colorWhite focus:border-colorTextBase focus:outline-none focus:shadow-shadowUserHeaderNav"
      >
        <AnalyticsSVG />
        {mobile && <p>Analytics</p>}
      </NavLink>
      <NavLink
        to="/account/post"
        className="bg-colorInput h-10 w-10 flex items-center justify-center border border-solid border-transparent rounded-sm transition-all ease-in-out cursor-pointer hover:bg-colorWhite hover:border-colorTextBase hover:outline-none hover:shadow-shadowUserHeaderNav focus:bg-colorWhite focus:border-colorTextBase focus:outline-none focus:shadow-shadowUserHeaderNav"
      >
        <AddPhoto />
        {mobile && <p>Add photo</p>}
      </NavLink>
      <button
        onClick={userLogout}
        className="bg-colorInput h-10 w-10 flex items-center justify-center border border-solid border-transparent rounded-sm transition-all ease-in-out cursor-pointer hover:bg-colorWhite hover:border-colorTextBase hover:outline-none hover:shadow-shadowUserHeaderNav focus:bg-colorWhite focus:border-colorTextBase focus:outline-none focus:shadow-shadowUserHeaderNav"
      >
        <Logout />
        {mobile && <p>Logout</p>}
      </button>
    </nav>
  );
}
