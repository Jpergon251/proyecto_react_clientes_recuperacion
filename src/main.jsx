import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import UserProvider from './contexts/UserContext'
import PokemonProvider from './contexts/PokemonProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <PokemonProvider>
        <RouterProvider router={router}/>
      </PokemonProvider>
    </UserProvider>
  </React.StrictMode>,
)
