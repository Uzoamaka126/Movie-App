import React from 'react';
import NoImage from '../../assets/page-not-found.svg';
import { IMAGE_BASE_URL, POSTER_SIZE } from'../../config';
// Import style
import { StyledActors } from '../styles/StyledActor'
export default function Actors({ actor }) {
    return (
        <StyledActors>
           <img src={
               actor.profile_path 
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
            } alt="Actors list" />
            <span className="actor-name">{actor.name}</span>
            <span className="actor-character">{actor.character}</span>
        </StyledActors>
    )
}