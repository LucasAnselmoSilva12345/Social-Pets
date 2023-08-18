import { useEffect } from 'react';

export function Head({ title }) {
  useEffect(() => {
    document.title = title + ' | Social Pets';
  }, [title]);

  return <></>;
}
