import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import useLocalStorage from './useLocalStorage';

const useAuthenticatedFetch = (url, options) => {
  const history = useHistory();
  const [accessToken] = useLocalStorage('ACCESS_TOKEN');
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [ok, setOk] = useState(null);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, {
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        ...options,
      });

      if (response.status === 401) {
        history.push('/loginPage');
      } else {
        setStatus(response.status);
        setOk(response.ok);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        }
        setIsProcessing(false);
      }
    };

    fetchData();
  }, [accessToken, history, options, url]);

  return { isProcessing, data, status, ok };
};

export default useAuthenticatedFetch;
