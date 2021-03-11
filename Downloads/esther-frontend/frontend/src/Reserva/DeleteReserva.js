import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

function DeleteReserva({ id }) {

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
        <div>
            <button onClick={handleDelete}>Eliminar reserva</button>
        </div>
    )
}

export default DeleteReserva;
