import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'


const CardPokemon = ({ pokemon }) => {
	const [active, setActive] = useState(false)
	


	const onClickActive = ()=>{
		if (active){
			// favoritos.slice(favoritos.indexOf(pokemon), 1)
			// let filtrados = favoritos.filter((elemento) => elemento.id != pokemon.id);
			// setFavoritos(filtrados);
			//favoritos.splice(favoritos.indexOf(pokemon), favoritos.indexOf(pokemon))
			return setActive(false);
		} else {
			// resultado = favoritos.push(pokemon)
			// setFavoritos(favoritos.push(pokemon))
			return setActive(true)
		}
		
	}
	return (
		<>
		<Link to={`/pokemon/${pokemon.id}`} className={`card-pokemon ${active ? 'active' : ''}`}>
			<div className='card-img'>
				<img
					src={pokemon.sprites.other.dream_world.front_default}
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>
			<div className='card-info'>
				<span className='pokemon-id'>N° {pokemon.id}</span>
				<h3>{pokemon.name}</h3>
				<div className='card-types'>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>
					))}
				</div>

				
					
				
			</div>
		</Link>
		<button className={`btn btn-sm h-25 w-50 mt-4 ${active ? 'btn btn-warning' : 'btn btn-dark'}`} onClick={onClickActive}>
						{`${active ? 'Añadido a favoritos' : 'Añadir a favoritos'}`}
		</button>
		</>
	);
};
export default CardPokemon