import { useState } from 'react';

export default useApi = apiFunc => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (...arg) => {
    setLoading(true);
    const response = await apiFunc(...arg);
    setData(response.data);
    setError(!response.ok);
    setLoading(false);
    return response;
  };

  return { data, loading, error, request };
};
