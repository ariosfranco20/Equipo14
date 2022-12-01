import { useForm } from "react-hook-form";
import '../css/authcss/login.css'
import Logo from '../images/REDUX.jpg'
import { Link } from 'react-router-dom'

const Login = ()=>{

    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => { console.log('login data', data) }

    return(
        
        <div className='row' id='contenedor-principal'>
            <div className='col-md-7' id='logo-empresa'>
                <img src={Logo} className="img-fluid rounded-top" alt="" />
            </div>
            <div className='col-md-5' id='formulario-registro'>
                <div className="card" >
                    <div className="card-header">
                        <div className='row'>
                            <div className='col-md-8'>
                                Incio de sesion
                            </div>
                            <div className='col-md-4'>
                                <Link to='/registro'>Registro</Link>
                            </div>
                        </div> 
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(customSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="usuario" className="form-label">Usuario</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    {...register("usuario", { required: true, pattern: /^[A-Za-z]+$/i, maxLength: 10, minLength:5 })}
                                    aria-invalid={errors.usuario ? "true" : "false"}
                                />
                                {errors.usuario && <small><p>Campo requerido - Sin espacios - Solo letras (ABC), con 5 caracteres como minimo y 10 como maximo</p></small>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contraseña" className="form-label">Contraseña</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    {...register("password", { required: true, maxLength: 10, minLength:5 })}
                                    aria-invalid={errors.password ? "true" : "false"}
                                />
                                {errors.password && <small><p>Campo requerido. minimo 5 y maximo 10 caracteres</p></small>}
                                {/* <small id="helpId" class="form-text text-muted">¿Olvido su contraseña?</small> */}
                            </div>
                            <button type="submit" className="btn btn-outline-success">Iniciar Sesion</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login