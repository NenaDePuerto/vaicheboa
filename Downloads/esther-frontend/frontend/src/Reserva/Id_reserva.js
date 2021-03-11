import { useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import useFetch from "../useFetch"

function Id_reserva() {
    const { id } = useParams()

    const reserva = useFetch(`http://localhost:9999/reserva/${id}`) || []

    const login = useSelector(s => s.login)

    const history = useHistory()

    const handleDelete = async e => {
        e.preventDefault()
        const res = await fetch(`http://localhost:9999/reserva/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': login.token }
        })
        if (res.ok) {
            history.push(`/UsuarioReserva`)
        } else {
            console.log('Ha habido un error')
        }
    }

    return (
        <div className='Id_reservaContainer'>
            <h1>Mi reserva</h1>
            <div className='Id_reservaContent'>
                <ul key={reserva.id}>
                    <li>{reserva.ciudad}</li>
                    <li>{reserva.direccion}</li>
                    <li>{reserva.fecha_inicio}</li>
                    <li>{reserva.fecha_fin}</li>
                    <li>{reserva.tarifa}</li>
                </ul>
                <div>
                    <button onClick={handleDelete}>Eliminar</button>
                </div>
                <div>
                    <button>Valorar</button>
                </div>
            </div>

        </div>
    )
}

export default Id_reserva