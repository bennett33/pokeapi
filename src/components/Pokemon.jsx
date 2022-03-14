import React, {useState} from 'react';
import styles from './styles.module.css';

const Pokemon = (props) => {
    const [pokelist, setPokelist] = useState([]);


    const getPokelist = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokelist(response.results))
    };

    return (
        <div>
            <button onClick={getPokelist} className={styles.button}>Fetch Pokemon</button>
            {pokelist.length > 0 && pokelist.map((pokemon, index) => {
                return (
                    <div key={index}> • {pokemon.name}</div>
                )
            })}
        </div>
    )
}

export default Pokemon;