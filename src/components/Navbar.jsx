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
    <header>
      <Link to='/'>
        <a class="logo" id="logo1"><img src="/src/assets/images/logo.png" alt="logo"/></a>
      </Link>
    
      <Link to='/' className='logo'>
        <a class="logo" id="logo2"><img src="/src/assets/images/logo2.png" alt="logo2"/></a>
      </Link>
      {user ? (
        <Link to='/perfil'>
        <a class="logo" id="logo3">Perfil<img src="/src/assets/images/pokedex.png" alt="logo3"/></a>
        </Link>
      ) : (
        <Link to='/registro'>
          <a class="logo" id="logo3">Registro<img src="/src/assets/images/pokedex.png" alt="logo3"/></a>
        </Link>
      )}
    </header>
    
  )
}

export default Navbar
