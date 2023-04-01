import React, { createContext, useState } from 'react';
import { TOKEN_POST, USER_GET } from '../api/api';

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [dataUser, setDataUser] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, dataUser }}>
      {children}
    </UserContext.Provider>
  );
}
