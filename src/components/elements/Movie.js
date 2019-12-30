import React from 'react';
// Import the necessary components
import Navigation from './Navigation';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actors from './Actors';
import Grid from './Grid';
import Spinner from './Spinner';
export default function Movie() {
    return (
        <>
            <Navigation />
            <MovieInfo />
            <MovieInfoBar />
            <Grid>
                <Actors />
            </Grid>
            <Spinner />
        </>
    )
}