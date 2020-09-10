import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import {motion,AnimatePresence} from 'framer-motion';

const Dashboard = (props)=>{
    if(!props.dash){

            return(
                <div className="h-10p hidden xl:block xl:h-full w-full xl:w-3p bg-gray-900 grid grid-rows-6">
                    
                </div>
            )
    }else{
        return(
            <div className="xl:h-full h-93p w-full xl:w-20p bg-gray-900 grid grid-rows-6">
                <div className="row-span-2 text-white p-5">
                    <div className=" block m-auto rounded-full bg-white border-2 border-black w-20 h-20"></div>
                    <h1 className="text-center mt-3">DYLAN</h1>
                    <h1 className="text-center">SANCHEZ</h1>
                </div>
                <div className="row-span-3">
                {props.usuario === "1"?
                <div className="text-white">
                    <Link to="/app/"><div className="p-5">INICIO</div></Link>
                    <Link to="/app/afiliados"><div className="p-5">AFILIADOS</div></Link>
                    <div className="p-5">PERFIL</div>
                </div>
                :null}
                </div>
                <div className="row-span-1 p-5">   
                    <button className="block m-auto p-2 rounded bg-red-900 text-white border-white border-2">CERRAR SESION</button>
                </div>
            </div>
        )
    }

}

export default Dashboard;