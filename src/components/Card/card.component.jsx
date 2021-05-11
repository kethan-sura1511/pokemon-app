import React from 'react';
import Types from '../Types/types.component';
import './card.style.css';

const Card = ({ id, name, types }) => {
    return (
        <div className='card-container'>
            <img alt='pokemon' className='poke-image' src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />
            <div className='poke-detail'>
                <p className='poke-id'>{`#${id}`}</p>
                <h2 className='poke-name'>{name}</h2>
                <div className='poke-types'>
                    <ul>
                    {
                        types.map((type, i) => (
                            <Types key={i} typeName={type.type.name} />
                        ))
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;