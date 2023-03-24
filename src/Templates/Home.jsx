import React from 'react';
import MovieList from '../containers/MovieList';
import ProgramList from '../containers/ProgramList';
const Home = () => {
    return (
        <>
            <MovieList />
            <ProgramList />
        </>
    );
}

export default Home;