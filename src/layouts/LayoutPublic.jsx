import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPublic = () => {
  return (
    <div className='container'>
        <Navbar/>
        <h1 className='text-center'>Bienvenido a la pokedex</h1>
        <Outlet/>
    </div>
  )
}

export default LayoutPublic