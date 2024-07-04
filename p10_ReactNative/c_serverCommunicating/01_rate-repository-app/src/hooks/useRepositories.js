import { useState, useEffect } from 'react';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRespositories = async () => {
    setLoading(true);

    const response = await fetch('http://192.168.0.118:5000/api/repositories');
    const json = await response.json();
    console.log("response: ", response);
    console.log("json: ", json);
    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRespositories();
  }, []);

  console.log('repo:', repositories)
  return { repositories, loading, refetch: fetchRespositories };
};

export default useRepositories;