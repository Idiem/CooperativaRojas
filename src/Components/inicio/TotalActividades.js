import React, { useEffect,useState } from 'react';
import axios from 'axios';
import ancheta from '../../img/ancheta.jpg'
import flecha from '../../img/izquierda (2).png';
import {motion,AnimatePresence} from 'framer-motion';
const TotalActividades = (props)=>{
    return(
        <div className="h-full">
            <div className="h-10p"><button onClick={props.cerrar}>VOLVER</button></div>
            <div className="h-90p grid-rows-2 grid grid-cols-12">
                <div className="row-span-2 justify-center items-center flex"><img className="w-50p cursor-pointer" src={flecha}></img></div>
                <div className="grid col-span-10 row-span-2 grid-rows-2 gap-8 grid-cols-2">
                    <div className="border-2 border-red-900 row-span-2 fondo-celebrar">
                        <div className="h-80p p-5"><img className="h-full block m-auto border-4 border-black rounded-full" src={ancheta}></img></div>
                        <div className="h-20p cusriva text-black justify-center items-center flex text-6xl">ANCHETAS</div>
                    </div>
                    <div className="bx-shadown-black row-span-1">
                        <img className="h-90p" src={ancheta}></img>
                    </div>
                    <div className="bx-shadown-black row-span-1">
                        <img className="h-90p" src={ancheta}></img>
                    </div>
                </div>
                <div className="row-span-2 justify-center items-center flex"><img className=" cursor-pointer w-50p rotate-180-" src={flecha}></img></div>
            </div>
        </div>
    )
}
export default TotalActividades;