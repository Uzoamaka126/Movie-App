import React, { useState, useEffect } from 'react';
import { 
    API_KEY, 
    API_URL, 
    BACKDROP_SIZE, 
    POSTER_SIZE
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
    
    return (
        <>
            <HeroImage />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn/>
        </>
    )           
}