import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { UserContext } from '../../contexts/UserContext';

import { User } from '@phosphor-icons/react';

export function Header() {
  const { dataUser } = useContext(UserContext);

  return (
    <header className="fixed w-full top-0 z-100 bg-white shadow-shadowHeader ease-in-out">
      <nav className="h-16 flex items-center justify-between  container my-0 mx-auto py-0 px-4">
        <Link to="/" aria-label="Dogs - Home" className="py-2 px-0">
          <Dogs />
        </Link>

        {dataUser ? (
          <Link
            to="/account"
            className="flex items-center text-colorTextBase ease-in-out"
          >
            {dataUser.nome}
          </Link>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-1 text-colorTextBase ease-in-out"
          >
            Login / Criar
            <User size={18} className="font-bold" />
          </Link>
        )}
      </nav>
    </header>
  );
}
