import useConnection, { API_KEY, BASE_URL } from '../useConnection';

export const useTrendingMovies = () => {
    const url = `${BASE_URL}/trending/movie/week`;
    const options = {
        params: {
            api_key: API_KEY
        }
    };

    return useConnection(url, options);
};

