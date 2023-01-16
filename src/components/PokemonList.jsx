import React, { useContext, useState } from 'react'
import PokemonContext from '../contexts/PokemonContext'
import CardPokemon from './CardPokemon'
import '../index.css'

const PokemonList = () => {
  
  const {allPokemons} = useContext(PokemonContext)

  
  
  return (
    <>
      <div className="card-list-pokemon container">
        {allPokemons.map(pokemon =>(<CardPokemon pokemon={pokemon} key={pokemon.id}/>))}
      </div>
    </>
  )
}

export default PokemonList