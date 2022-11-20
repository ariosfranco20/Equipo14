import React from 'react'
import '../css/login.css'
import Logo from '../images/REDUX.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Login(){

  const[login, setLogin] = useState({usuario:'', contraseña:''})

  const handleInputChange = (event) =>{
    // console.log(event.target.value)
    setLogin({
      ...login, [event.target.name] : event.target.value
    })
  }

  const submitHandler = (event) =>{
    event.preventDefault()
    console.log(login.usuario + ' ' + login.contraseña)
  }

    return(
      <div className='row' id='contenedor-principal'>
        <div className='col-md-7' id='logo-empresa'>
          <img src={Logo} class="img-fluid rounded-top" alt="" />
        </div>
        <div className='col-md-5' id='formulario-registro'>
          <div className="card" >
            <div class="card-header">
              <div className='row'>
                <div className='col-md-8'>
                  Incio de sesion
                </div>
                <div className='col-md-4'>
                  <Link to='/registro'><a href="">Registro</a></Link>
                </div>
              </div> 
            </div>
            <div class="card-body">
              <form onSubmit={submitHandler}>
                <div class="mb-3">
                  <label htmlFor="usuario" class="form-label">Usuario</label>
                  <input type="text" className="form-control" name="usuario" placeholder="Escriba su usuario" onChange={handleInputChange}/>
                </div>
                <div class="mb-3">
                  <label htmlFor="contraseña" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" name="contraseña"  placeholder="Escriba su contraseña" onChange={handleInputChange}/>
                  {/* <small id="helpId" class="form-text text-muted">¿Olvido su contraseña?</small> */}
                </div>
                <Link to='/listaDeOrdenes'><button type="submit" class="btn btn-outline-success">Iniciar Sesion</button></Link>
              </form> 
            </div>
                          
                    {/* <div class="card-footer text-muted">
                       footer
                    </div> */}
          </div>

        </div>
      </div>
    )
}