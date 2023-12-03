import { useState, useEffect } from 'react';
import { API } from '../utils/API';

const usePostData = (endpoint: string, data:any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const postData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API}/${endpoint}`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const responseData = await response.json();
        setResponse(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    postData();
  }, [endpoint, data]);

  return { isLoading, response, error };
};

export default usePostData;
