import React from 'react';
import { 
    API_KEY, 
    API_URL, 
    BACKDROP_SIZE, 
    POSTER_SIZE,
    IMAGE_BASE_URL
} from '../config';

// Import Components
import HeroImage from '../components/elements/HeroImage';
import SearchBar from '../components/elements/SearchBar';
import Grid from '../components/elements/Grid';
import Spinner from '../components/elements/Spinner';
import LoadMoreBtn from '../components/elements/LoadMore';
import MovieThumb from '../components/elements/MovieThumb';

// Import Custom Hook
import { useHomeFetch } from './hooks/useHomeFetch';
export default function Home() {
    const [{state, loading, error}, fetchMovies] = useHomeFetch();

    console.log(state);
    if(error) return <div>Error!!!!</div>
    if(!state.movies[0]) return <Spinner />

    return (
        <>
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title={state.heroImage.original_title}
                text={state.heroImage.overview}
            />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn/>
        </>
    )           
}