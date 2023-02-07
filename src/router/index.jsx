import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import { createBrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import LayoutPublic from '../layouts/LayoutPublic'
import LayoutPrivate from '../layouts/LayoutPrivate'
import PokemonPage from '../pages/PokemonPage'
import Perfil from '../pages/Perfil'
import SearchPage from '../pages/SearchPage'
import Registro from '../pages/Registro'
import Inicio from '../pages/Inicio'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/perfil',
        element: <Perfil />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registro',
        element: <Registro />,
      },
      {
        path: '/pokemon/:id',
        element: <PokemonPage />
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/inicio',
        element: <Inicio />,
      },
      {
        path: '/dashboard',
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          }
        ],
        
      },
      
    ],
  },
])
