import React from 'react'
import { useState } from 'react'
import '../css/registro.css'
import { Link } from 'react-router-dom'

export function Registro (){

    const[registro, setRegistro] = useState({usuario:'', contraseña:'', email:'' })

    const handleInputChange = (event) => {
        // console.log(event.target.value)//Valor del input objetivo del evento
        setRegistro({
            ...registro,[event.target.name] : event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();//Para prevenir que el boton lo haga automaticamente por el metodo get
        console.log(registro.usuario +' '+ registro.contraseña)
    }
    
    return(
        <div className="row justify-content-center align-items-center g-2" id='registro'>
            <div className="col-md-5">
                <div class="card 'justify-content-center'">
                    <div className='container1'>
                    <Link to='/'><a href="">Iniciar sesion</a></Link>
                    </div>
                    <h3>REDUX - Registro</h3>
                    <div class="card-body">
                        <div class="">
                            <form onSubmit={submitHandler}>
                                <div class="mb-3 row">
                                    <label for="usuario" class="col-4 col-form-label">Usuario</label>
                                    <div class="col-8">
                                        <input type="text" class="form-control" name="usuario" id="inputName" placeholder="Usuario" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="contraseña" class="col-4 col-form-label">Contraseña</label>
                                    <div class="col-8">
                                        <input type="text" class="form-control" name="contraseña" id="inputName" placeholder="Contraseña" onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="email" class="col-4 col-form-label">Correo Electronico</label>
                                    <div class="col-8">
                                        <input type="text" class="form-control" name="email" id="inputName" placeholder="Correo Electronico" onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <div class="offset-sm-4 col-sm-8">
                                        <button type="submit" class="btn btn-outline-success">Registrarse</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}