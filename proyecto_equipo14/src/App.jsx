import { useState } from 'react'
import './App.css'
import './css/bootstrap.min.css'
import Login from './components/Login'
import Registro from './components/Registro'
import OrdenesHome from './components/OrdenesHome'
import CrearOrden from './components/CrearOrden'
import ActualizarOrden from './components/ActualizarOrden'
import Navbar from './components/navbar'
import './css/navbarcss/navbar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/ordenes" element={<OrdenesHome />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/actualizarOrden/:id/edit" element={<ActualizarOrden />} />
            <Route path="/crearOrden" element={<CrearOrden />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
