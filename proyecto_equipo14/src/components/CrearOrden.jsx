import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import '../css/authcss/actualizarOrden.css'
import OrdenesForm from "./ordenesForm";

const CrearOrden = ()=>{

    return(
      <>
      {/* <h2>Form para crear</h2> */}
      <OrdenesForm datos={[]}/>
      </>

    )
}

export default CrearOrden