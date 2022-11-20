import React from 'react'
import { useState } from 'react'
import '../css/crearOrden.css'
import { Link } from 'react-router-dom'

export function CrearOrden (){

  const[crear, setCrear] = useState({
    fechacre:'', 
    horacre:'',
    estadocre:'', 
    anchocre:'', 
    altocre:'', 
    largocre:'', 
    pesocre:'', 
    dirRecogidacre:'', 
    ciuRecogidacre:'', 
    nomDestinatariocre:'',
    idDestinatariocre:'',
    dirEntregacre:'',
    ciuEntregacre:''})

  const handleInputChange = (event) =>{
    // console.log(event.target.value)
    setCrear({
      ...crear, [event.target.name] : event.target.value 
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();//Para prevenir que el boton lo haga automaticamente por el metodo get
    console.log(crear.ancho +' '+ crear.alto)
  };


    return(


      <div className='container'>           
        <div className='row'>
          <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
              <a href="../" class="navbar-brand">REDUX</a>
              <a className="navbar-brand">Gestion de paquetes - Crear nueva orden</a>
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
                          <label htmlFor="fechacre" class="col-4 col-form-label">Fecha</label>
                          <input type="date" class="form-control" name="fechacre" id="inputName" onChange={handleInputChange} />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="horacre" class="col-4 col-form-label">Hora</label>
                          <input type="time" class="form-control" name="horacre" id="inputName" onChange={handleInputChange} />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="estadocre" class="col-4 col-form-label">Estado</label>
                          <input type="text" class="form-control" name="estadocre" id="inputName" value="Cumplido" onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="mb-5 row">                         
                        <div className="col-md-3">
                          <label htmlFor="anchocre" class="col-4 col-form-label">Ancho</label>
                          <input type="text" class="form-control" name="anchocre" id="inputName" placeholder="Ancho" onChange={handleInputChange} />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="altocre" class="col-4 col-form-label">Alto</label>
                          <input type="text" class="form-control" name="altocre" id="inputName" placeholder="Alto" onChange={handleInputChange} />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="largocre" class="col-4 col-form-label">Largo</label>
                          <input type="text" class="form-control" name="largocre" id="inputName" placeholder="Largo" onChange={handleInputChange} />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="pesocre" class="col-4 col-form-label">Peso</label>
                          <input type="text" class="form-control" name="pesocre" id="inputName" placeholder="Peso" onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="dirRecogidacre" class="col-4 col-form-label">Direccion de recogida</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="dirRecogidacre" id="inputName" placeholder="Direccion de recogida" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="ciuRecogidacre" class="col-4 col-form-label">Ciudad recogida</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="ciuRecogidacre" id="inputName" placeholder="Ciudad de recogida" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="nomDestinatariocre" class="col-4 col-form-label">Nombre destinatario</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="nomDestinatariocre" id="inputName" placeholder="Nombre del destinatario" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="idDestinatariocre" class="col-4 col-form-label">Cedula/Nit destinatario</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="idDestinatariocre" id="inputName" placeholder="Cedula/Nit destinatario" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="dirEntregacre" class="col-4 col-form-label">Direccion de entrega</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="dirEntregacre" id="inputName" placeholder="Direccion de entrega" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-5 row">
                        <label htmlFor="ciuEntregacre" class="col-4 col-form-label">Ciudad de entrega</label>
                        <div className="col-8">
                          <input type="text" class="form-control" name="ciuEntregacre" id="inputName" placeholder="Ciudad de entrega" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <div className="offset-sm-5 col-sm-4">
                          <button type="submit" class="btn btn-outline-success">Crear orden</button>
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

