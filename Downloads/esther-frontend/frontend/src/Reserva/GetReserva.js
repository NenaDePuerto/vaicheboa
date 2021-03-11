import { useState } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../useFetch";

function GetReservaWrapper() {
    const {id} = useParams()
    const data = useFetch('http://localhost:9999/reserva/'+`${id}`) || []
    return data ? <GetReserva data={data}/> : false
}


function GetReserva ({data}) {

    const {id} = useParams()
    
    if(!data) return <div>Loading....</div>
    return(
        <div>
            {data.map(d=>
                <main>
                    <h3>{d.ciudad}</h3>
                    <ul>
                        <li>{d.tarifa}€</li>
                        <li>{d.direccion}</li>
                        <li>CheckIn:{d.fecha_inicio}</li>
                        <li>CheckOut:{d.fecha_fin}</li>
                    </ul>
                </main>
            )}
        </div>
    )
}

export default GetReservaWrapper;