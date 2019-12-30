import React, { useState } from 'react';
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
// Import image not found img
import NoImage from '../assets/page-not-found.svg';

export default function Home() {
    const [{state, loading, error}, fetchMovies] = useHomeFetch();
    const [searchTerm, setSearchTerm] = useState('');
    const { currentPage, totalPages } = state;

    function loadMoreMovies() {
        const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`;
        const popularMoviesEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage + 1}`;
        const endpoint = searchTerm ? searchEndpoint : popularMoviesEndpoint;

        console.log(popularMoviesEndpoint);

        fetchMovies(endpoint);

    }

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
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {/* If the above is true, it evaluates the one on the RHS of the question mark, else - */}
                {/* It evaluates to the one on the RHS of the full colon */}
                {state.movies.map(movie => (
                    <MovieThumb 
                        key={movie.id}
                        clickable // because we are going to reuse this component when we need to view individual movies
                        image={
                        movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage                        
                        } 
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                        // In the above code, I use a ternary operator because I have to check the poster path image
                        // URL exists, if not, we are going to use a no image picture there

                ))}
            </Grid> 
            {loading && <Spinner />}
            {/* Check if loading is true, then return spinner, if false, it will return nothing */}
            {currentPage < totalPages && !loading && (
                <LoadMoreBtn text="Load More" callback={loadMoreMovies}/>
            )}
        </>
    );         
}