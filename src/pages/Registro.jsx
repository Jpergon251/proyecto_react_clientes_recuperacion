import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../contexts/UserContext'
import Swal from 'sweetalert2'

const Registro = () => {

    const datosInitialState = {
        email: '',
        pass: '',
      }
      const { user, setUser } = useUserContext()
      const [users, setUsers] = useState([])
      const [datos, setDatos] = useState(datosInitialState)
      const [error, setError] = useState(null)
    
      const navigate = useNavigate()
    
      const dataging = (e) => {
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
        if(email == localStorage.getItem('email')){
          setError('Usuario ya registrado')
          return
        }
        registrar()
      }


    const registrar = async () => {
      console.log('Registrando...')
      Swal.fire({
      title: 'Éxito',
      text: 'Usuario registrado',
      icon: 'success',
      })
      setUsers([...users, datos])
      setDatos(datosInitialState)
      setError(null)
      setUser(true)
      navigate('/dashboard')
      for (var key in localStorage) {
        if(key.includes('pokemon')){
          localStorage.removeItem(key)
        }
      }
      localStorage.setItem('email', datos.email)
      localStorage.setItem('pass', datos.pass)
      }

      const handleChange = (e) => {
        setDatos({
          ...datos,
          [e.target.name]: e.target.value,
        })
      }
    
  return (
    <div className='mt-5'>
      <h3 className='text-center'>Registro</h3>
      <hr />
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-8 col-md-6 col-xl-4'>
          <form onSubmit={dataging}>
            {error && <div className='alert alert-danger'>{error}</div>}
            <input
              name='email'
              type='email'
              className='form-control mb-2'
              placeholder='Email'
              onChange={(e) => handleChange(e)}
              value={datos.email}
            />
            <input
              name='pass'
              type='password'
              className='form-control mb-2'
              placeholder='Pasword'
              onChange={(e) => handleChange(e)}
              value={datos.pass}
            />
            <div class="text-center pt-1">
              <button class="btn btn-primary gradient-custom-2 mb-3" type="submit">Registrar</button>
            </div>
            <Link to='/login'>
            <button
              className='btn btn-sm w-100 mb-2'
              type='button'>
              ¿Ya tienes cuenta?
            </button>
            </Link>
            
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registro