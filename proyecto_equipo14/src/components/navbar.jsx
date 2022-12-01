import { NavLink } from "react-router-dom"//NavLink me deja sombreado el boton o enlace sobre el cual algo click

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/ordenes">REDUX</a>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'white' : 'MediumSpringGreen' })}
                                className="nav-link"
                                to="/crearOrden">Crear Orden</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'white' : 'MediumSpringGreen' })}
                                className="nav-link"
                                to="/ordenes">Lista de Ordenes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'white' : 'MediumSpringGreen' })}
                                className="nav-link"
                                to="/login">Iniciar sesion</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar