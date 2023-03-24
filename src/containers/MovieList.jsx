import React from "react";
import { useTrendingMovies } from "../hooks/MovieHooks/useTrendingMovies";
import '../styles/trendingMovies.css';


const MovieList = () => {
    const { data, error, isLoading } = useTrendingMovies();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="trending-movies">
            {data.results.map(movie => (
                <div className="trending-movie-card" key={movie.id}>

                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.release_date}</p>
                    <h2>{movie.title}</h2>

                </div>
            ))}
        </div>
    );
};

export default MovieList;