import useConnection, { API_KEY, BASE_URL } from '../useConnection';

export const useTrendingPrograms = () => {
    const url = `${BASE_URL}/trending/tv/week`;
    const options = {
        params: {
            api_key: API_KEY
        }
    };

    return useConnection(url, options);
};

