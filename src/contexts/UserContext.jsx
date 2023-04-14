import React, { createContext, useState, useEffect, useCallback } from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api/api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [dataUser, setDataUser] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(
    async function () {
      setDataUser(null);
      setError(null);
      setLoading(false);
      setIsLogged(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate]
  );

  async function getUser(token) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = USER_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setDataUser(json);
      setIsLogged(true);
      console.log(json);
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    }
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Usuário ou senha inválidos`);
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/account');
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          console.log(response);
          if (!response.ok) throw new Error(`Error: ${response.statusText}`);
          await getUser(token);
        } catch (error) {
          setError(error.message);
          setIsLogged(false);
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setIsLogged(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, dataUser, userLogout, error, isLogged, loading }}
    >
      {children}
    </UserContext.Provider>
  );
}
