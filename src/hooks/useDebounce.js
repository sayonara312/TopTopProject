import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
  const [debouncevalue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(handler);
    // eslint-disable-next-line
  }, [value]);

  return debouncevalue;
}

export default useDebounce;
