import React, { useContext, useState } from 'react'
import PokemonContext from '../contexts/PokemonContext'
import CardPokemon from './CardPokemon'
import '../index.css'
import ReactPaginate from 'react-paginate'

const PokemonList = () => {
  
  const { globalPokemons, loading, filteredPokemons } =
		useContext(PokemonContext);


	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='card-list-pokemon container'>
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					) : (
						<>
							{globalPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					)}
				</div>
			)}
		</>
	);
}
export default PokemonList