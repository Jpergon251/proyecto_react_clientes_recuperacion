import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FilterBar from '../components/FilterBar'
import PokemonList from '../components/PokemonList'
import PokemonContext from '../contexts/PokemonContext'

const Dashboard = () => {

	const { onInputChange, valueSearch, onResetForm ,globalPokemons} =
		useContext(PokemonContext);

	const navigate = useNavigate();

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});
		onResetForm();
	};

	const {onClickLoadMore, active, setActive} = useContext(PokemonContext)

  return (
    <>
	<div className='container-filter container'>
				<div className='icon-filter' onClick={() => setActive(!active)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
						/>
					</svg>
					<span>Filtrar</span>
				</div>
			</div>
		
      <div className='container-filter container'>
        <div className="icon-filter">
		
        <form onSubmit={onSearchSubmit}>
			
					<div className='form-group input-pokemon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='icon-search'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
						<input
							
							type='search'
							name='valueSearch'
							id=''
							value={valueSearch}
							onChange={onInputChange}
							placeholder='Buscar nombre de pokemon'
						/>
					</div>	
				<button className='btn-search m-2'>Buscar</button>
			</form>
		</div>
	</div>
	<PokemonList/>
	
	<FilterBar/>
	<div className="container-btn-load-more container"><button className='btn btn-search text-center m-2' onClick={onClickLoadMore}>
			Cargar mas
	</button>
	</div>
	
    </>
  )
}

export default Dashboard