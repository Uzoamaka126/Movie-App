import React from 'react';
import { StyledGrid, StyledGridContent } from '../styles/Grid';
export default function Grid({ header, children }) {
    // The children prop is going to contain all the props that we mapped out in the MovieThumb.js back in the Home.js
    return (
        <StyledGrid>
            <h1>{header}</h1>  
            <StyledGridContent>{children}</StyledGridContent>  
        </StyledGrid>
    )
}