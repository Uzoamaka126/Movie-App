import React from 'react';
import appLogo from '../../assets/film.svg';
import { StyledHeader, RmdbLogo } from '../styles/StyledHeader';

export default function Header() {
    return (
        <StyledHeader>
            <div className="header-content">
                <RmdbLogo src={appLogo}  alt="app-logo"/>
                {/* <RmdbLogo src={appLogo}  alt="app-logo again"/> */}
            </div>
        </StyledHeader>
    )
}