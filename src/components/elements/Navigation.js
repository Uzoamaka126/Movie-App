import React from 'react';
import { Link } from '@reach/router';
// Import style
import { StyledNavigation } from '../styles/Navigation';
export default function Navigation({ movie }) {
    console.log(movie)
    return (
        <StyledNavigation>
            <div>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <p>|</p>
                <p>{movie}</p>
            </div>
        </StyledNavigation>
    )
}