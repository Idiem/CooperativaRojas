import React from 'react';
const TotalAhorrado = (props)=>{
    return(
        <div className="block row-span-6 grid grid-rows-6">
            <div className="row-span-1 bg-indigo-700 text-white grid grid-cols-12 rounded p-3 text-size-20">
                <div className="xl:col-span-3 col-span-12 text-center">
                    <div>TOTAL AHORRADO</div>
                    <div>$ 90.000</div>
                </div>
                <div className="xl:col-span-6 col-span-12 grid xl:grid-cols-3 xl:mt-0  grid-cols-2 mt-5">
                    <div className="flex justify-center items-center">BUSCAR</div>
                    <div className="flex justify-center items-center"><input className="text-size-14 p-2 rounded text-black" placeholder="BUSCAR"></input></div>
                </div>
                <div className="xl:col-span-3 col-span-12 flex mt-5 xl:mt-0 justify-center items-center">
                    <button className="p-2 rounded bg-red-700 w-90p border-2 border-red-900" onClick={props.cerrar}>VOLVER</button>
                </div>
            </div>
        
            <div className="row-span-5 block overflow-y-scroll p-2 grid">
                <table className="w-full">
                    <tr className="hidden xl:grid p-2 grid-cols-6 text-center">
                        <td className="col-span-1">
                            PUESTOS
                        </td>
                        <td  className="col-span-1">
                            $ PRECIO
                        </td>
                        <td  className="col-span-1">
                            $ INTERESES
                        </td>
                        <td  className="col-span-1">
                            MES PAGO
                        </td>
                        <td  className="col-span-1">
                            FECHA DE PAGO
                        </td>
                        <td  className="col-span-1">
                            TOTAL
                        </td>
                    </tr>
                    <tr className="grid rounded border-2 border-gray-500 xl:border-0 bg-gray-300 gap-2 p-2 grid-cols-6 text-center">
                            <td className="xl:col-span-1 col-span-2">
                                <div className="xl:hidden">
                                    PUESTOS
                                </div>
                                <div>
                                    1
                                </div>
                            </td>
                            <td  className="xl:col-span-1 col-span-2">
                                <div className="xl:hidden">
                                    $ PRECIO
                                </div>
                                <div>
                                    20.000
                                </div>
                            </td>
                            <td  className="xl:col-span-1 col-span-2">
                                <div className="xl:hidden">
                                    $ INTERESES
                                </div>
                                <div>
                                    5.000
                                </div>
                            </td>
                            <td  className="xl:col-span-1 col-span-2">
                                <div className="xl:hidden">
                                    MES PAGO
                                </div>
                                <div>
                                    1
                                </div>
                            </td>
                            <td  className="xl:col-span-1 col-span-2">
                                <div className="xl:hidden">
                                    FECHA DE PAGO
                                </div>
                                <div>
                                    17/05/20
                                </div>
                            </td>
                            <td  className="xl:col-span-1 col-span-2">
                                <div className="xl:hidden">
                                    TOTAL
                                </div>
                                <div>
                                    25.000
                                </div>
                            </td>
                        </tr>
                </table>

            </div>
        </div>
    )
}
export default TotalAhorrado;