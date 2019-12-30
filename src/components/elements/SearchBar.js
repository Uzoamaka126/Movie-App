import React, { useState, useRef } from 'react';
import FontAwesome from 'react-fontawesome';
import { SearchBarWrapper, SearchBarContent } from '../styles/SearchBar';

export default function SearchBar({ callback }) {
    const [inputState, setInputState] = useState('');
    const timeout = useRef(null);

    function doSearch(event) {
        console.log(event.target.value);
        // event.preventDefault();
        const { value } = event.target;

        clearTimeout(timeout.current);
        setInputState(value);


        timeout.current = setTimeout(() => {
            callback(value);
        }, 500);
    }


    return (
        <SearchBarWrapper>
            <SearchBarContent>
                <FontAwesome className="fa fa-search" name="search" size="2x" />
                <input
                    type="text"
                    placeholder="Search movies here"
                    onChange={doSearch}
                    value={inputState}
                />
            </SearchBarContent>        
        </SearchBarWrapper>
    )
}