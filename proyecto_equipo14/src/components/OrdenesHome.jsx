import { Link } from "react-router-dom"
import '../css/authcss/gestionPaquetes.css'
import { useState, useEffect } from "react"
import axios from 'axios'


const labels = [
    "# orden",
    "Fecha",
    "Ciudad Entrega",
    "Direccion Entrega",
    "Estado"
]


const Ordenes = ()=>{

    const [ordenes, setOrdenes] = useState(null)
    useEffect(()=>{
        const userId = "6387c440cee4d0f63f892816"
        axios.get('http://localhost:5000/ordenes?userId=' + userId)
        .then(response =>{
            console.log(response.data)
            setOrdenes(response.data)
        })
    }, [])

    return(
        <div className='tabla'>
                <div className="table-responsive" id="divtabla">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                {labels.map((label, index)=>{
                                    return(
                                        <th scope="col" key={index}>{label}</th>  
                                    )
                                })}
                                
                            </tr>
                        </thead>
                        <tbody>
                            {ordenes !== null ? ordenes.map((orden, index)=>{
                                return(
                                <tr key = {index}>
                                    <td scope="row"><Link to={'/actualizarOrden/'+orden._id+'/edit'}>{index}</Link></td>
                                    <td>{orden.fecha}</td>
                                    <td>{orden.ciuEntrega}</td>
                                    <td>{orden.dirEntrega}</td>
                                    <td className='text-success'>{orden.estado}</td>
                                </tr>
                                )
                            }) : ''}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default Ordenes