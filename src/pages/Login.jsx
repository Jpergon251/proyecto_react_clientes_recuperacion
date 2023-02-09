import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useUserContext } from '../contexts/UserContext'

const Login = () => {
  const datosInitialState = {
    email: '',
    pass: '',
  }
  const { user, setUser } = useUserContext()
  const [datos, setDatos] = useState(datosInitialState)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const procesarDatos = (e) => {
    e.preventDefault()
    const { email, pass } = datos

    if (!email.trim()) {
      setError('Escribe un email')
      return
    }
    if (!pass.trim()) {
      setError('Escribe una password')
      return
    }
    if (pass.length < 6) {
      setError('Escribe una contraseña de 6 o mas carácteres')
      return
    }
    if(email === localStorage.getItem('email') && pass === localStorage.getItem('pass')){
      login()
    }else{
      setError('Datos incorrectos')
    }
    
    
  }

  const login = async () => {
    console.log('Logueando...')
    // Validamos el user
    Swal.fire({
      title: 'Éxito',
      text: 'Usuario logueado',
      icon: 'success',
      })
    setUser(true)
    setDatos(datosInitialState)
    setError(null)
    navigate('/dashboard')
  }

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  const mandaEmail = () =>{
    Swal.fire({
      title: 'Se ha enviado un email para restablecer contraseña',
      timer: 2000
    })
    
  }
  return (
    <div className='mt-5'>
      <h3 className='text-center'>Login</h3>
      <hr />
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-8 col-md-6 col-xl-4'>
          <form onSubmit={procesarDatos}>
            {error && <div className='alert alert-danger'>{error}</div>}
            <input
              name='email'
              type='email'
              className='email'
              placeholder='Email'
              onChange={(e) => handleChange(e)}
              value={datos.email}
            />
            <input
              name='pass'
              type='password'
              className='password'
              placeholder='Pasword'
              onChange={(e) => handleChange(e)}
              value={datos.pass}
            />
            <div class="text-center pt-1">
              <button type="submit">Log in</button>
            </div>
            <Link to='/registro'>
            <button
              className='btn btn-sm w-100 mb-2'
              type='button'>
              ¿No tienes cuenta?
            </button>
            </Link>
            <button
              onClick={mandaEmail}
              className='btn btn-sm w-100 mb-2'
              type='button'>
              ¿Olvidaste tus datos?
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
