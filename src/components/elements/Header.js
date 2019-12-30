import React from 'react';
import { Link } from '@reach/router'
import appLogo from '../../assets/film.svg';
import { StyledHeader, RmdbLogo } from '../styles/StyledHeader';

export default function Header() {
    return (
        <StyledHeader>
            <div className="header-content">
                <Link to="/">
                    <RmdbLogo src={appLogo}  alt="app-logo"/>
                </Link>
                {/* <RmdbLogo src={appLogo}  alt="app-logo again"/> */}
            </div>
        </StyledHeader>
    )
}