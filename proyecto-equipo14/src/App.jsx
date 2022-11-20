import { Fragment, useState } from 'react'
import './App.css'
import './css/bootstrap.min.css'
import { Login } from './components/Login'
import { Registro } from './components/Registro'
import { GestionPaquetes } from './components/GestionPaquetes'
import { ActualizarOrden } from './components/ActualizarOrden'
import { CrearOrden } from './components/CrearOrden'
import React from "react"
import { Route, Routes, Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      {/* <ActualizarOrden
        tipoCrud='Actualizacion de ordenes (Recogida)'
        tipoBoton='Actualizar' /> */}
        {/* <ActualizarOrden 
        tipoCrud='Registro de ordenes (Recogida)'
        tipoBoton='Crear orden'/> */}
        {/* <Login /> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/listaDeOrdenes' element={<GestionPaquetes />} />
          <Route path='/actualizarOrden' element={<ActualizarOrden />} />
          <Route path='/crearOrden' element={<CrearOrden />} />
        </Routes>
    </div>
    
  )
}

export default App




