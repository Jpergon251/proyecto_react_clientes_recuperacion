import React, { useState } from 'react'


const Perfil = () => {

  const [pokemonsFavoritos, setPokemonsFavoritos] = useState([])

  for (let i = 0; i <pokemonsFavoritos.length; i++) {

  }

  console.log(localStorage.getItem('user'))

  return (
    <>
    <div className='container .mark'>
    Tu Email 
    <div>
    {JSON.parse(localStorage.getItem('user'))["email"]}
    </div>
    </div>
    </>
  )
}

export default Perfil