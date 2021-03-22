const { useState, useCallback } = require('react');

const useLocalStorage = (key) => {
  const initialValue = localStorage.getItem(key);
  const [state, setState] = useState(initialValue);
  const setStateInLocal = useCallback(
    (newState) => {
      localStorage.setItem(key, newState);
      setState(newState);
    },
    [key],
  );

  window.addEventListener('storage', ({ k, newValue }) => {
    if (k === key && newValue !== state) {
      setState(newValue);
    }
  });

  return [state, setStateInLocal];
};

export default useLocalStorage;
