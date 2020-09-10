import React, { useEffect,useState } from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import fondo from '../img/fondo.jpg'

const loged = ()=>{
    let login = localStorage.getItem('token');
    if(login){
        return true
    }else{
        return false
    }
}

var setid;
const Login = (props) => {
    if(loged()){
        props.history.push('/app/');
    }
    const [estado,setEstado] = useState({
        correo: "",
        contraseña : "",
        animacion : false,
        estadoAnimacion : 0
    });

    useEffect(()=>{
        if(estado.animacion){
            setid = setTimeout(()=>{
                setEstado({...estado,estadoAnimacion:estado.estadoAnimacion+1})
            },3000);
        }else{
            clearTimeout(setid);
        }
    },[estado.estadoAnimacion,estado]);

    const omitir=()=>{
        setEstado({...estado,animate:false});
    }
    const onChange = (e)=>{
        setEstado({...estado,[e.target.name]: e.target.value});
    }
    const submit = (e)=>{
        e.preventDefault();
        props.history.push("/app/");
    }
    return(
        <div className="h-screen w-full bg-gray-900 p-10">
            <div className="h-full">
                {estado.animacion ?
                <div  className="h-full">
                        <div className="h-90p flex justify-center items-center">
                            <AnimatePresence>
                        {estado.estadoAnimacion === 0?
                                <motion.h2  initial={{x:-1000,opacity:0,display:"none"}} exit={{opacity:0,transition:{delay:0,duration:0.5}}} animate={{display:"block",x:0,opacity:1,transition:{delay:0,duration:0.2},}} className="text-center uppercase text-white text-5xl">Bienvenido</motion.h2>:null
                        }
                        </AnimatePresence>
                        <AnimatePresence>
                        {estado.estadoAnimacion === 1?
                                <div>
                                <motion.h2  initial={{x:-1000,opacity:0,display:"none"}} exit={{opacity:0,transition:{delay:0,duration:0.5}}} animate={{display:"block",x:0,opacity:1,transition:{delay:0.5,duration:0.2},}} className="text-center uppercase text-white text-5xl">Cooperativa Rojas</motion.h2>
                                </div>:null
                        }
                        </AnimatePresence>
                        <AnimatePresence>
                        {estado.estadoAnimacion===2?
                            <div className="h-90p flex justify-center items-center">
                                {omitir()}
                            </div>                       
                        :null}
                        </AnimatePresence>
                        </div>
                    <motion.button onClick={omitir} initial={{opacity:0}} animate={{opacity:1,transition:{duration:2.5}}} exit={{opacity:0}} whileHover={{width:140,height:60}} className=" block m-auto text-black p-4 rounded bg-white w-32">OMITIR</motion.button>
                </div>
                :<AnimatePresence>
                <motion.div initial={{x:-1000,opacity:0,display:"none"}} exit={{y:-1000,opacity:0,transition:{delay:0,duration:1.3}}} animate={{display:"block",x:0,opacity:1,transition:{delay:0.5,duration:0.5},}}  className="h-full">
                    <div className=" grid grid-rows-3 grid-cols-5 gap-5 h-full">
                         <div className=" bx-shadown-white row-span-1 col-span-5 flex justify-center items-center">
                             <h1 className="text-6xl text-white text-center">COOPERATIVA ROJAS</h1>
                         </div>
                         <div className="bx-shadown-white col-span-2 row-span-2 p-5">
                             <img className=" h-full" alt="fondo" src={fondo}></img>
                         </div>
                         <div className="bx-shadown-white w-full col-span-3 row-span-2 ">
                             <form onSubmit={submit} className="p-5 grid grid-flow-col gap-3 grid-rows-5">
                                <h1 className="row-span-1 text-white col-span-4 text-4xl text-center ">INICIO SESION</h1>
                                 <div className="grid grid-rows-2 row-span-4 col-span-2">
                                     <div className=" p-4 row-span-1">
                                         <h1 className="text-center text-white">Correo</h1>
                                        <input name="correo" value={estado.correo} onChange={onChange} className=" mt-2 block m-auto p-2 rounded" type="text" placeholder="correo"></input>
                                    </div>
                                    <div className="p-4 row-span-1">
                                        <h1 className="text-center text-white">constraseña</h1>
                                        <input name="contraseña" value={estado.contraseña} onChange={onChange}  className="mt-2  block m-auto p-2 rounded" type="password" placeholder="constraseña"></input>
                                    </div>
                                 </div>
                                 <div className="row-span-4 col-span-2 flex justify-center items-center">
                                 <input className="block p-2 m-auto rounded" type="submit" value="CONFIRMAR"></input>
                                 </div>
                             </form>
                         </div>
                    </div>
                </motion.div>
         </AnimatePresence>}
            </div>
        </div>
    )
}

export default Login;