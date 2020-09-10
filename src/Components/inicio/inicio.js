import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Dashboard from '../dashboard';
import Admin from './admin';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Afiliados from '../afiliados/afiliado';

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
            <div className="xl:h-screen w-full xl:flex">
                <Dashboard usuario="1" dash={estado.dash}/>
                <div className="grid w-full h-full xl:w-98p grid-rows-6">
                    <Switch>
                        <Route path='/app/afiliados' render={()=><Afiliados estado={estado} cambiarDash={cambiarDash}/>} ></Route>
                        <Route path='/app'  render={()=><Admin estado={estado} cambiarDash={cambiarDash}/>}></Route>
                    </Switch>
                </div>
            </div>
        </Router>

    )
}

export default Inicio;