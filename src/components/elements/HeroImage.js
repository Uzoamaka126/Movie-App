import React from 'react';
import styled from 'styled-components';

const StyledHeroImage = styled.div`
    background: ${props => 
        `linear-gradient(
            to bottom, rgba(0, 0, 0, 0)
            39%, rgba(0, 0, 0, 0, 0)
            41%, rgba(0, 0, 0, 0.8)
            100%
        ),
        url('${props.image}'), #1c1c1c`};
        background-size: 100%;
        background-position: center, center;
        width: 100%;
        height: 600px;
        position: relative;
        animation: animateHeroImage 1s;
            

`;

export default function HeroImage({ image, title, text }) {
    return (
        <StyledHeroImage image={image}>
            <div className="heroimage-content">
                <div className="heroimage-text">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>       
        </StyledHeroImage>
    )
}