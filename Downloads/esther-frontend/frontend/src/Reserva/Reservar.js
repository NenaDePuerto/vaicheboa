import { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"

function Reservar() {
    const { id } = useParams()

    const login = useSelector(s => s.login)

    const [fecha_inicio, setFecha_inicio] = useState('')
    const [fecha_fin, setFecha_fin] = useState('')

    const history = useHistory()

    const handleReserva = async e => {
        e.preventDefault()
        try {
            const ret = await fetch(`http://localhost:9999/coworking/${id}/reserva`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': login.token
                },
                body: JSON.stringify({ fecha_inicio, fecha_fin }),
                method: 'POST'
            })
            const data = await ret.json()

            if (ret.ok) {
                history.push(`/reserva/${data.resultId}`)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='reservarContainer'>
            <form onSubmit={handleReserva}>
                <label className='reservarLabel'>
                    <label>
                        Fecha inicio
                <input type='date' name='fecha_inicio' value={fecha_inicio} onChange={e => setFecha_inicio(e.target.value)} required />
                    </label>
                    <label>
                        Fecha fin
                <input type='date' name='fecha_fin' value={fecha_fin} onChange={e => setFecha_fin(e.target.value)} required />
                    </label>
                </label>
                <button>Reservar</button>
            </form>
        </div>
    )
}

export default Reservar