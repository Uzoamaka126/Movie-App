import { useEffect, useState } from 'react';
import { POPULAR_BASE_URL } from '../../config';

export function useHomeFetch() {
    const [state, setState] = useState({
        movies: []
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async endpoint => {
        setError(false);
        setLoading(true);

        const isLoadMore = endpoint.search('page');


        try{
            // We are awaiting twice because the first await is to fetch itself, 
            // the second is to await the parsing of the data to json
            const result = await (await fetch(endpoint)).json();
            console.log(result);
            // Here "results" is just a property on the array that we get back from the results response of the API
            setState(prev => ({
                ...prev,
                movies: 
                    isLoadMore !== -1 
                    ? [...prev.movies, ...result.results] 
                    : [...result.results],
                heroImage: prev.heroImage || result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages
            }));

        } catch(error) {
            setError(true);
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies(`${POPULAR_BASE_URL}`);
    }, []); 

    return [{state, loading, error}, fetchMovies];
}