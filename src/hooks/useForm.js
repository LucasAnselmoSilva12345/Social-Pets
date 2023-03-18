import { useState } from 'react';

const VALIDATION_RULES = {
  email: {
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Please enter a valid email address',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    message:
      'A senha deve ter 8 caracteres, uma letra maiúscula, uma minúscula e um número',
  },
};

export const useForm = (inputType) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const validate = (inputValue) => {
    if (!inputValue || !VALIDATION_RULES[inputType]) {
      return true;
    }

    if (inputValue.length === 0) {
      setError('Please, fill in the field');
      return false;
    }

    if (!VALIDATION_RULES[inputType].regex.test(inputValue)) {
      setError(VALIDATION_RULES[inputType].message);
      return false;
    }

    setError(null);
    return true;
  };

  const onChange = ({ target }) => {
    const inputValue = target.value;
    if (error) {
      validate(inputValue);
    }
    setValue(inputValue);
  };

  const onBlur = () => {
    validate(value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate,
    onBlur,
  };
};
