import React from 'react'
import '../css/gestionPaquetes.css'
import { Link } from 'react-router-dom'

export function GestionPaquetes (){
    return(
        <div className='container'>           
            <div className='row'>
                <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                    <div class="container">
                        <a href="../" class="navbar-brand">REDUX</a>
                        <a class="navbar-brand">Gestion de paquetes - Lista de ordenes</a>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-md-auto">
                                <li class="nav-item">
                                <Link to='/crearOrden'><a class="nav-link" href=""><i class="bi bi-twitter"></i> Crear nueva orden</a></Link>
                                </li>
                                <li class="nav-item">
                                <Link to='/'><a class="nav-link" href=""><i class="bi bi-twitter"></i> Cerrar sesion</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tabla'>
                <div class="table-responsive">
                    <table class="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col"># Servicio</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Ciudad Entrega</th>
                                <th scope="col">Direccion Entrega</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td scope="row"><Link to='/ActualizarOrden'><a href="">1</a></Link></td>
                                <td>01/01/2023</td>
                                <td>San Andres</td>
                                <td>Calle 4 # 7-30</td>
                                <td className='text-success'>Guardado</td>
                            </tr>
                            <tr class="">
                                <td scope="row"><Link to='/ActualizarOrden'><a href="">2</a></Link></td>
                                <td>01/01/2023</td>
                                <td>Cartagena</td>
                                <td>Calle 4 # 7-30</td>
                                <td className='text-success'>Cumplido</td>
                            </tr>
                            <tr class="">
                                <td scope="row"><Link to='/ActualizarOrden'><a href="">3</a></Link></td>
                                <td>01/01/2023</td>
                                <td>Santa Marta</td>
                                <td>El Rodadero</td>
                                <td className='text-success'>Cancelado</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>    
    )
}