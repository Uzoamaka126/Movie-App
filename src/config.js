// Configuration for IMDB

const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'b07db02cdd6f61716fca18c55de9c02b';
// Sizes: w300, w342, w500, w700, original
const BACKDROP_SIZE = 'w500';
// w92, w154, w342, w500, w780, original
const POSTER_SIZE = 'w500';
const IMAGE_BASE_URL= 'https://image.tmdb.org/t/p/';
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;


export {
    API_URL,
    API_KEY,
    BACKDROP_SIZE,
    POSTER_SIZE,
    IMAGE_BASE_URL,
    SEARCH_BASE_URL,
    POPULAR_BASE_URL
}