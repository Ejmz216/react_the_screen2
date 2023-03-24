import React from "react";
import { useTrendingPrograms } from '../hooks/ProgramHooks/useTrendingProgram.js';
import '../styles/trendingMovies.css';


const MovieList = () => {
    const { data, error, isLoading } = useTrendingPrograms();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="trending-movies">
            {data.results.map(program => (
                <div className="trending-movie-card" key={program.id}>

                    <img src={`https://image.tmdb.org/t/p/w500${program.poster_path}`} alt={program.title} />
                    <p>{program.first_air_date}</p>
                    <h2>{program.name}</h2>

                </div>
            ))}
        </div>
    );
};

export default MovieList;