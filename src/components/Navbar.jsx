import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import PokemonContext from '../contexts/PokemonContext'
import { useUserContext } from '../contexts/UserContext'

const Navbar = () => {
  const { user, setUser } = useUserContext()

  const navigate = useNavigate()

  const cerrarSesion = () => {
    console.log('cerrando...')
    navigate('/login')
    setUser(null)
    
  }

  return (
    <div className='navbar navbar-dark bg-dark mt-5'>
      <Link to='/' className='logo'>
					<img
						src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
						alt='Logo Pokedex'
					/>
			</Link>
      
      
      <div>
        <div className='d-flex'>
          {user && (
            <NavLink to='/dashboard' className='btn btn-dark  mr-2'>
              Lista de Pokemons
            </NavLink>
          )}
          {user && (
            <Link to='/perfil' className='btn btn-dark mr-2'>
              Perfil
            </Link>
          )}
            <NavLink className='btn btn-dark mr-2' to='/contact'>
              Contacto
            </NavLink>
          {user ? (
            <button className='btn btn-dark' onClick={() => cerrarSesion()}>
              Cerrar sesión
            </button>
          ) : (
            <NavLink className='btn btn-dark mr-2' to='/login'>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
