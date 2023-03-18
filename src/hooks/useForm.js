import { useState } from 'react';

export const useForm = () => {
  const [value, setValue] = useState('');

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
};
