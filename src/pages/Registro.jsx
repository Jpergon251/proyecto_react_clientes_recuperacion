import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../contexts/UserContext'
import Swal from 'sweetalert2'

const Registro = () => {

    const datosInitialState = {
      user:'',  
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
      localStorage.setItem('user', datos.user)
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
        <section className='section registro'>
          
          <form onSubmit={dataging} className="form-register">
            {error && <div className='alert alert-danger'>{error}</div>}
            <input
              name='user'
              type='text'
              class='user'
              placeholder='Usuario'
              onChange={(e) => handleChange(e)}
              value={datos.user}
            />
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
              placeholder='Password'
              onChange={(e) => handleChange(e)}
              value={datos.pass}
            />
            <div class="text-center pt-1">
              <button type="submit">Registrar</button>
            </div>
            <Link to='/login'>
            <button
              className='btn btn-sm w-100 mb-2'
              type='button'>
              ¿Ya tienes cuenta?
            </button>
            </Link>
            
            
          </form>
          <img src="/src/assets/images/Pokedex_DPP.png" alt=""></img>
        </section>
      </div>
    </div>
  )
}

export default Registro