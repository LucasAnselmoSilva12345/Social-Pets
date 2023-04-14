import { useCallback, useState } from 'react';

export const useAPIFetch = () => {
  const [dataUser, setDataUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchAPIData = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setDataUser(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    dataUser,
    loading,
    error,
    fetchAPIData,
  };
};
