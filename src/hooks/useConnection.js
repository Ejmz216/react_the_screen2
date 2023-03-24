
import { useState, useEffect } from 'react';
import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = 'e9a1c1cffa228c72dd345e10e23b52f1';

const useConnection = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(url, options);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, error, isLoading };
};

export default useConnection;
