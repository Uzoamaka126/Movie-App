import { useEffect,  useCallback, useState } from 'react';
import { API_KEY, API_URL } from '../../config';

export function useMovieFetch(movieId) {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // We are going to use the movieId inside here which means that this function is going to change on every render
    // because we are depending on an external value here
    // Then we are going to provide it with an inline function which in this case is async because we are going to
    // our data. It also has a dependency array which means that it is going to change only when the movieId changes
    // This will prevent us from going into an infinite loop

    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);

        try {
            const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
            const result = await (await fetch(endpoint)).json();
            
            // console.log(movieId);
            // console.log(result);
            // since we have gotten the data by this point, we can then get the credits info
            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            const creditsResult = await (await fetch(creditsEndpoint)).json();

            // console.log(creditsResult);

            const directors = creditsResult.crew.filter(member => {
                return member.job === 'Director'
            });

            setState({
                ...result,
                actors: creditsResult.cast,
                directors
            });

        } catch(error) {
            setError(true);
        }
            setLoading(false);
    }, [movieId])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Here we have to return something
    return [state, loading, error]
}

