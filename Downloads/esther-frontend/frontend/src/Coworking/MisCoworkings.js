import { Link, useParams } from "react-router-dom"
import useFetch from "../useFetch"

function MisCoworking() {
    const { id_usuario } = useParams()

    const coworkingData = useFetch(`http://localhost:9999/usuario/coworking/${id_usuario}`) || []

    return (
        <div className='myCoworkingContainer'>
            <h1>Mis coworking</h1>
            {coworkingData && coworkingData.map(h =>
                <div className='myCoworking' key={h.id} >
                    <ul>
                        <li>Provincia: {h.provincia}</li>
                        <li>Ciudad: {h.ciudad}</li>
                        <li>Dirección: {h.direccion}</li>
                        <li>Tarifa: {h.tarifa}</li>
                    </ul>
                    <Link to={`/updateCoworking/${h.id}`}>Ver más</Link>
                </div>
            )}
        </div>
    )
}

export default MisCoworking;
