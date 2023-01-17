import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import CardPokemon from '../components/CardPokemon';
import PokemonContext from '../contexts/PokemonContext';

const SearchPage = () => {
  const location = useLocation();

	const { globalPokemons } = useContext(PokemonContext);

  const filterPokemons = () => {
    if (!isNaN(parseInt(location.state))){
      
      const filteredPokemons = globalPokemons.filter(pokemon =>
        pokemon.id === parseInt(location.state))

      return filteredPokemons
    }else {
      const filteredPokemons = globalPokemons.filter(pokemon =>
          pokemon.name.includes(location.state.toLowerCase())
        );
      return filteredPokemons  
    }
  }
	return (
		<div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filterPokemons().length}</span>{' '}
				resultados:
			</p>
			<div className='card-list-pokemon container'>
				{filterPokemons().map(pokemon => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
	);
}

export default SearchPage