import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import useLocalStorage from './useLocalStorage';

const useLazyAuthenticatedFetch = (url, options) => {
  const history = useHistory();
  const [accessToken, setAccessToken] = useLocalStorage(
    'ACCESS_TOKEN',
  );
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
        setAccessToken('');
        history.push('/loginPage');
      } else {
        const jsonData = await response.json();
        setData(jsonData);
        setStatus(response.status);
        setOk(response.ok);
        setIsProcessing(false);
      }
    };
    fetchData();
  }, [accessToken, history, options, setAccessToken, url]);

  return { isProcessing, data, status, ok };
};

export default useLazyAuthenticatedFetch;
