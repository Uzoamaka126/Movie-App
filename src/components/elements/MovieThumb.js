import React from 'react';
import { StyledMovieThumb } from '../styles/MovieThumb';
export default function MovieThumb({ image, clickable }) {
    return (
        <StyledMovieThumb>
            {clickable ? (
                <img className="clickable" src={image} alt="moviethumb" />
            ) : (
                <img className="clickable" src={image} alt="moviethumb" />
            )        
        }       
        </StyledMovieThumb>
    )
}