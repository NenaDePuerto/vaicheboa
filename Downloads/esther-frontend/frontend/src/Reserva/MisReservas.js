import { Link } from "react-router-dom"
import useFetch from "../useFetch"


function MisReservas() {
    const reservaData = useFetch(`http://localhost:9999/reserva`) || []
    console.log(reservaData)

    return (
        <div className='misReservasContainer'>
            <h1>Mis reservas</h1>
            {reservaData && reservaData.map(b =>
                <div className='misReservasContent'>
                    <Link key={b.id} to={`/reserva/${b.id_reserva}`}>
                        <ul>
                           
                            <li>{b.ciudad}</li>
                            <li>{b.direccion}</li>
                            <li>{b.fecha_inicio}</li>
                            <li>{b.fecha_fin}</li>
                            <li>{b.tarifa}</li>
                        </ul>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default MisReservas;