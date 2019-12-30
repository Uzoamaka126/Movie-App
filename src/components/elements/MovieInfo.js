import React from 'react';
import NoImage from '../../assets/page-not-found.svg';
import { IMAGE_BASE_URL, POSTER_SIZE } from'../../config';

import MovieThumb from './MovieThumb';
import Movie from './Movie';
// Import styles
import { StyledMovieInfo }from '../styles/MovieInfo';


export default function MovieInfo({ movie }) {
    return (
        <StyledMovieInfo backdrop={movie.backdrop_path}>
            <div className="movieinfo-content">
                <div className="movieinfo-thumb">
                    <MovieThumb
                        image={
                            movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                        }
                        clickable={false}
                    />
                </div>
                <div className="movieinfo-text">
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
               
                <div className="rating-director">
                    <div>
                        <h3>IMDB Rating</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="directors">
                        {/* We want to check if there is more than one director or not */}
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(item => (
                            <p key={item.credit_id}>{item.name}</p>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </StyledMovieInfo>
    )
}