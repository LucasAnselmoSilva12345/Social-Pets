import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import { ChartLine, Plus, SignOut, UserCircle } from '@phosphor-icons/react';
export function UserHeaderNav() {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <nav id="userHeaderNav" className="grid grid-cols-4 gap-4">
      <NavLink
        to="/account"
        end
        className="h-10 w-10 flex items-center justify-center border-2 border-solid border-transparent rounded-sm transition-all ease-in-out cursor-pointer hover:border-slate-700 hover:outline-none focus:border-slate-700 focus:outline-none"
      >
        <UserCircle size={30} />
        {mobile && <p>My photos</p>}
      </NavLink>
      <NavLink
        to="/account/analytics"
        className="h-10 w-10 flex items-center justify-center border-2 border-solid border-transparent rounded-sm transition-all ease-in-out cursor-pointer hover:border-slate-700 hover:outline-none focus:border-slate-700 focus:outline-none"
      >
        <ChartLine size={30} />
        {mobile && <p>Analytics</p>}
      </NavLink>
      <NavLink
        to="/account/post"
        className="h-10 w-10 flex items-center justify-center border-2 border-solid border-transparent rounded-sm transition-all ease-in-out cursor-pointer hover:border-slate-700 hover:outline-none focus:border-slate-700 focus:outline-none"
      >
        <Plus size={30} />
        {mobile && <p>Add photo</p>}
      </NavLink>
      <button
        onClick={userLogout}
        className="h-10 w-10 flex items-center justify-center border-2 border-solid border-transparent rounded-sm transition-all ease-in-out cursor-pointer hover:border-slate-700 hover:outline-none focus:border-slate-700 focus:outline-none"
      >
        <SignOut size={30} />
        {mobile && <p>Logout</p>}
      </button>
    </nav>
  );
}
