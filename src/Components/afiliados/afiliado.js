import React, { useState } from 'react';
import Header from '../header'
const Afiliados = (props)=>{    
    const [estado] = useState({
        ventana : 'AFILIADOS'
    })
    return(
        <div className="row-span-6 grid">
            <Header estado={props.estado} nombre={estado.ventana} cambiarDash={props.cambiarDash} />
        </div>
    )
}

export default Afiliados;