import React from 'react'


const Perfil = () => {

  const datos = localStorage.getItem('users')

  console.log(datos)

  return (
    <>
    <div>
    Tus favoritos

    </div>
    </>
  )
}

export default Perfil