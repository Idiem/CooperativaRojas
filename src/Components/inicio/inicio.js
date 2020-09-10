import React, { useState } from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

const Inicio = (props)=>{
    const [estado,setEstado] = useState({
        dash : null
    })
    const cambiarDash = ()=>{
        if(estado.dash){
            setEstado({dash:false})
        }else{
            setEstado({dash:true})
        }
    }   

    return(
        <Router>

        </Router>

    )
}

export default Inicio;