import {motion,AnimatePresence} from 'framer-motion';
import React from 'react';
import flecha from '../img/izquierda (1).png';

const Header = (props)=>{
    return(
        <div className="p-3 h-7p xl:h-10p bg-gray-800 text-3xl text-white text-center flex">
            <div onClick={props.cambiarDash} className="p-1 cursor-pointer">
                {props.estado.dash?
                    <motion.img initial={{rotate:180}} animate={{rotate:0}} src={flecha} className="w-8 h-8 block m-auto"></motion.img>
                :<motion.img initial={{rotate:0}} animate={{rotate:180}} src={flecha} className="w-8 h-8 block m-auto"></motion.img>}
            </div>
            <div className="w-97p">{props.nombre}</div>
        </div>
    )
}

export default Header;