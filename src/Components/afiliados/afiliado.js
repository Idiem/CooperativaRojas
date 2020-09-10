import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Header from '../header'
const Afiliados = (props)=>{    
    const [estado,setEstado] = useState({
        ventana : 'AFILIADOS'
    })

    const cerrar = ()=>{
        setEstado({ventana:'AFILIADOS'});
    }
    return(
        <div className="row-span-6 grid">
            <Header estado={props.estado} nombre={estado.ventana} cambiarDash={props.cambiarDash} />
        </div>
    )
}

export default Afiliados;