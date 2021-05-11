import React from 'react';
import './searchbox.style.css';

const SearchBox = ({ searchChange }) => (
    <div className='searchbox'>
        <input 
            className='search-input' 
            type='search' 
            placeholder='search pokemons' 
            onChange={searchChange}
            autoFocus
        />
    </div>
)

export default SearchBox;