import React from 'react'
import { useState } from 'react'
import '../css/ActualizarOrden.css'
import { Link } from 'react-router-dom'

export function ActualizarOrden (){

  const[actualizar, setActualizar] = useState({
    fecha:'', 
    hora:'',
    estado:'', 
    ancho:'', 
    alto:'', 
    largo:'', 
    peso:'', 
    dirRecogida:'', 
    ciuRecogida:'', 
    nomDestinatario:'',
    idDestinatario:'',
    dirEntrega:'',
    ciuEntrega:''})

  const handleInputChange = (event) =>{
    // console.log(event.target.value)
    setActualizar({
      ...actualizar, [event.target.name] : event.target.value 
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();//Para prevenir que el boton lo haga automaticamente por el metodo get
    console.log(actualizar.ancho +' '+ actualizar.alto)
  };


    return(
      <div className='container'>           
        <div className='row'>
          <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
              <a href="../" class="navbar-brand">REDUX</a>
              <a className="navbar-brand">Gestion de paquetes - Actualizar orden</a>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-md-auto">
                  <li className="nav-item">
                    <Link to='/listaDeOrdenes'><a class="nav-link" href=""><i class="bi bi-twitter"></i> Lista de ordenes</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/'><a class="nav-link" href=""><i class="bi bi-twitter"></i> Cerrar sesion</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center g-2" id='crearOrden'>
          <div className="col-md-10">
            <div className="card 'justify-content-center'">
              <div className="card-body" id='margin'>
                  <div className="row">
                    <form onSubmit={submitHandler}>
                      <div className="mb-2 row">
                        <div className="col-md-4">
                          <label htmlFor="fecha" class="col-4 col-form-label">Fecha</label>
                          <input type="date" class="form-control" name="fecha" id="inputName" placeholder="Fecha" onChange={handleInputChange} />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="hora" class="col-4 col-form-label">Hora</label>
                          <input type="time" class="form-control" name="hora" id="inputName" placeholder="Hora" onChange={handleInputChange} />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="usuario" class="col-4 col-form-label">Estado</label>
                          <input type="text" value="Pendiente" class="form-control" name="usuario" id="inputName" placeholder="Usuario" onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="mb-5 row">                         
                        <div className="col-md-3">
                          <label htmlFor="ancho" class="col-4 col-form-label">Ancho</label>
                          <input type="text" class="form-control" name="ancho" id="inputName" placeholder="Ancho" onChange={handleInputChange} />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="alto" class="col-4 col-form-label">Alto</label>
                          <input type="text" class="form-control" name="alto" id="inputName" placeholder="Alto" onChange={handleInputChange} />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="largo" class="col-4 col-form-label">Largo</label>
                          <input type="text" class="form-control" name="largo" id="inputName" placeholder="Largo" onChange={handleInputChange} />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="peso" class="col-4 col-form-label">Peso</label>
                          <input type="text" class="form-control" name="peso" id="inputName" placeholder="Peso" onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="dirRecogida" class="col-4 col-form-label">Direccion de recogida</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="dirRecogida" id="inputName" placeholder="Direccion de recogida" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="ciuRecogida" class="col-4 col-form-label">Ciudad recogida</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="ciuRecogida" id="inputName" placeholder="Ciudad de recogida" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="nomDestinatario" class="col-4 col-form-label">Nombre destinatario</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="nomDestinatario" id="inputName" placeholder="Nombre del destinatario" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="idDestinatario" class="col-4 col-form-label">Cedula/Nit destinatario</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="idDestinatario" id="inputName" placeholder="Cedula/Nit del destinatario" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="dirEntrega" class="col-4 col-form-label">Direccion de entrega</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="dirEntrega" id="inputName" placeholder="Direccion de entrega" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-5 row">
                        <label htmlFor="ciuEntrega" class="col-4 col-form-label">Ciudad de entrega</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="ciuEntrega" id="inputName" placeholder="Ciudad de entrega" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <div className="offset-sm-5 col-sm-4">
                          <button type="submit" class="btn btn-outline-success">Actualizar orden</button>
                        </div>
                      </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}