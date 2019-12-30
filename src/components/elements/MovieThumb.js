import React from 'react';
import { Link } from '@reach/router'

import { StyledMovieThumb } from '../styles/MovieThumb';
export default function MovieThumb({ image, movieId, clickable }) {
    return (
        <StyledMovieThumb>
            {/* If this clickable is true, we will have the link component go somewhere */}
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <img className="clickable" src={image} alt="moviethumb" />
                </Link>
            ) : (
                <img className="clickable" src={image} alt="moviethumb" />
            )        
        }       
        </StyledMovieThumb>
    )
}