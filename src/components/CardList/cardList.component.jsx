import React from 'react';
import Card from '../Card/card.component';
import './cardList.style.css';

const CardList = ({ pokemons }) => {
    return(
    <div className='cardlist-container'>
        {
            pokemons.map(pokemon => (
                <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} types={pokemon.types} />
            ))
        }
    </div>
)};

export default CardList;