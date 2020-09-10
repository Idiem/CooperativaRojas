import React, { useEffect,useState } from 'react';
import TotalAhorrado from './TotalAhorrado'
import TotalActividades from './TotalActividades'
import dinero from '../../img/dinero (1).png'
import dinero2 from '../../img/dinero (2).png'
import puesto from '../../img/puesto.png'
import cuenta from '../../img/cuenta.png'
import actividad from '../../img/actividad.png'
import personas from '../../img/mujer.png';
import peligro from '../../img/alerta.png';
import Header from '../header'

const Admin = (props)=>{
    const [estado,setEstado] = useState({
        ventana : 'INICIO'
    })
    const cambiarVentanaT = ()=>{
        setEstado({ventana:'TOTAL AHORRADO'})
    }
    const cambiarVentanaA = ()=>{
        setEstado({ventana:'TOTAL ACTIVIDADES'})
    }
    const cerrar = ()=>{
        setEstado({ventana:'INICIO'});
    }
    return(
        <div className="row-span-6 h-full">
                <Header estado={props.estado} nombre={estado.ventana} cambiarDash={props.cambiarDash} />
                {estado.ventana === 'TOTAL AHORRADO' ?
                    <div className="block xl:h-90p h-auto xl:p-8 p-3 grid"> 
                        <TotalAhorrado cerrar={cerrar} />
                    </div>
                :null}
                {estado.ventana === 'TOTAL ACTIVIDADES' ?
                    <div className="block xl:h-90p h-auto xl:p-8 p-3"> 
                        <TotalActividades cerrar={cerrar} />
                    </div>
                :null}
                {estado.ventana == 'INICIO' ?
                <div className="block xl:h-90p h-auto xl:p-8 p-3 grid grid-cols-12">
                    <div className="col-span-12 xl:gap-10 gap-5 grid-cols-12 grid ">
                        <div className="xl:col-span-4 col-span-6 rounded bx-shadown-black p-2 xl:grid xl:grid-cols-2">
                            <div className="p-2">
                                <img src={puesto} className="w-24 block m-auto"></img>
                            </div>
                            <div>
                                <div className="h-50p text-center p-2">
                                    NUMERO DE CUPOS
                                </div>
                                <div className="h-1p"><div className=" w-full bg-black h-px"></div></div>
                                <div className="h-50p p-2 xl:p-0 flex justify-center items-center">
                                    <span>8</span>
                                </div>
                            </div>
                        </div>
                        <div onClick={cambiarVentanaT} className="xl:col-span-4 col-span-6 rounded cursor-pointer xl:grid xl:grid-cols-2 bx-shadown-black p-2">
                            <div className="p-2">
                                <img src={dinero} className="w-24 block m-auto"></img>
                            </div>
                            <div>
                                <div className="h-50p text-center p-2">
                                    TOTAL AHORRADO
                                </div>
                                <div className=" w-full bg-black h-px"></div>
                                <div className="h-50p p-2 xl:p-0  flex justify-center items-center">
                                    <span>$ 90.000</span>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-4 col-span-6 bx-shadown-black rounded p-2 xl:grid xl:grid-cols-2">
                            <div className="p-4">
                                <img src={cuenta} className="w-20 block m-auto"></img>
                            </div>
                            <div>
                                <div className="h-50p text-center p-2">
                                    ESTADO DE CUENTA
                                </div>
                                <div className=" w-full bg-black h-px"></div>
                                <div className="h-50p p-2 xl:p-0  flex justify-center items-center">
                                    <span>EXCELENTE</span>
                                </div>
                            </div>
                        </div>
                        <div onClick={cambiarVentanaA} className="xl:col-span-6 col-span-6 cursor-pointer rounded bx-shadown-black p-2 xl:grid xl:grid-cols-2">
                            <div className="p-2">
                                    <img src={actividad} className="w-24 block m-auto"></img>
                                </div>
                            <div>
                                <div className="h-50p text-center p-2">
                                    TOTAL ACTIVIDADES ACTIVAS
                                </div>
                                <div className=" w-full bg-black h-px"></div>
                                <div className="h-50p p-2 xl:p-0  flex justify-center items-center">
                                    <span>8</span>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-6 cursor-pointer rounded xl:grid xl:grid-cols-2 bx-shadown-black p-2">
                            <div className="p-2">
                                <img src={dinero2} className="w-24 block m-auto"></img>
                            </div>
                            <div>
                                <div className="h-50p text-center p-2">
                                    TOTAL GANADO EN ACTIVIDADES
                                </div>
                                <div className=" w-full bg-black h-px"></div>
                                <div className="h-50p p-2 xl:p-0  flex justify-center items-center">
                                    <span>$ 90.000</span>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-6 cursor-pointer rounded bx-shadown-black p-2 xl:grid xl:grid-cols-2">
                            <div className="p-2">
                                    <img src={personas} className="w-24 block m-auto"></img>
                                </div>
                            <div>
                                <div className="h-50p text-center p-2">
                                    TOTAL AFILIADOS
                                </div>
                                <div className=" w-full bg-black h-px"></div>
                                <div className="h-50p p-2 xl:p-0  flex justify-center items-center">
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-6 cursor-pointer rounded xl:grid xl:grid-cols-2 bx-shadown-black p-2">
                            <div className="p-2">
                                <img src={peligro} className="w-24 block m-auto"></img>
                            </div>
                            <div>
                                <div className="h-50p text-center p-2">
                                    AFILIADOS EN MORA
                                </div>
                                <div className=" w-full bg-black h-px"></div>
                                <div className="h-50p p-2 xl:p-0  flex justify-center items-center">
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :null}
        </div>
    )
}
export default Admin;