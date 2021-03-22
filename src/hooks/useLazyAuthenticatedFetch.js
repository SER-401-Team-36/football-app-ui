import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { stringify } from 'query-string';

import useLocalStorage from './useLocalStorage';

const useLazyAuthenticatedFetch = (url) => {
  const history = useHistory();
  const [accessToken, setAccessToken] = useLocalStorage(
    'ACCESS_TOKEN',
  );
  const [data, setData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [status, setStatus] = useState(null);
  const [ok, setOk] = useState(null);

  const fetchData = useCallback(
    ({ params = {}, body, ...options } = {}) => {
      (async () => {
        try {
          const response = await fetch(
            `${url}?${stringify(params)}`,
            {
              mode: 'cors',
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(body),
              ...options,
            },
          );

          if (response.status === 401) {
            setAccessToken('');
            history.push('/loginPage');
          } else {
            setStatus(response.status);
            setOk(response.ok);
            if (
              response.ok &&
              response.headers.get('Content-Type') ===
                'application/json'
            ) {
              const jsonData = await response.json();
              setData(jsonData);
            }
            setIsProcessing(false);
          }
        } catch (error) {
          console.log(error);
          setOk(false);
          setIsProcessing(false);
        }
      })();
    },
    [accessToken, history, setAccessToken, url],
  );

  return { isProcessing, data, fetchData, status, ok };
};

export default useLazyAuthenticatedFetch;
