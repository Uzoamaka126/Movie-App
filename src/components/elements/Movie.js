import React from 'react';
// Import the necessary components
import Navigation from './Navigation';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actors from './Actors';
import Grid from './Grid';
import Spinner from './Spinner';

// import custom hook
import { useMovieFetch } from '../hooks/useMovieFetch';
export default function Movie({ movieId }) {
    const [ movie, loading, error ] = useMovieFetch(movieId);
    // This Id is the one we sent in that we grabbed from the url
    
    if (error) return <div>Error loading page</div>
    if (loading) return <Spinner />
    // if (loading || !movie.original_title) return <Spinner />

    return (
        <>
            <Navigation movie={movie.original_title} />
            <MovieInfo movie={movie}/>
            <MovieInfoBar />
            <Grid header="Actors">
                {movie.actors.map(actor => (
                    <Actors 
                        key={actor.credit_id}
                        actor={actor}                    
                    />
                ))}
            </Grid>
            {/* <Spinner /> */}
        </>
    )
}