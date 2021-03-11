import { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

function CreateSalaCoworking() {
    const [sala, setSala] = useState('despacho, compartida, sala de reuniones, salon de eventos')
    const [tarifa, setTarifa] = useState('')    
    const [capacidad, setCapacidad] = useState('')
    const [limpieza, setLimpieza] = useState(false)
    const [parking, setParking] = useState(false)
    const [wifi, setWifi] = useState(false)
    const [proyector, setProyector] = useState(false)
    const [impresora, setImpresora] = useState(false)


    const [error, setError] = useState()
    const login = useSelector(s => s.login)
    const history = useHistory()

    const handleSubmit = async e => {
        e.preventDefault()
        const headers = { 'Content-Type': 'application/json' }
        if (login) headers['Authorization'] = login.token
        const ret = await fetch('http://localhost:9999/sala', {
            headers,
            body: JSON.stringify({
                sala, tarifa,capacidad, limpieza, 
                parking, wifi, proyector, impresora 
                
            }),
            method: 'POST'
        })
        if (ret.ok) {
         
            history.push(`/usuario/sala/${login.id}`)
        } else {
            console.log('Error')
            setError(true)
        }
    }

    return (
        <div className='createSalaCoworkingContainer'>

            <div className='createForm'>
                <form onSubmit={handleSubmit}>
                <label>
                        <span>Foto del espacio coworking</span>
                        <div >
                            <div className="fotoCoworking" />
                            <input name="fotoCoworking" type="file" accept="image/*" />
                        </div>
                    </label>       
                    <h2>¿CÓMO ES TU COWORKING?</h2>
                    <h3>tipo de sala</h3>
                    <select value={sala} onChange={e => setSala(e.target.value)}>
                            <option>tipo de sala</option>
                            <option>despacho</option>
                            <option>compartida</option>
                            <option>sala de reuniones</option>
                            <option>sala de eventos</option>
                        </select>
                        <h3>tarifa</h3>
                        <select name='' value={tarifa} onChange={e => setTarifa(e.target.value)}>
                            
                            <option value={1}>100-500</option>
                            <option value={2}>500-1000</option>
                            <option value={3}>1000-2000</option>
                            <option value={4}>2000-3000</option>
                        </select>
                        <h3>capacidad</h3>
                        <select value={capacidad} onChange={e => setCapacidad(e.target.value)}>
                        <option value='' hidden>Capacidad</option>
                        <option value={1}>1</option>
                        <option value={2}>2-4</option>
                        <option value={3}>5-8</option>
                        <option value={4}>+8</option>
                    </select>
                    <h3>servicios</h3>
                    <div className='Servicios'>
                        <label>
                            <span>
                                Limpieza
                                <input type='checkbox' name='limpieza' checked={limpieza} onChange={e => setLimpieza(e.target.checked)} />
                            </span>
                            <span>
                                Parking
                                <input type='checkbox' name='parking' checked={parking} onChange={e => setParking(e.target.checked)} />
                            </span>
                            <span>
                                WIFI
                                <input type='checkbox' name='wifi' checked={wifi} onChange={e => setWifi(e.target.checked)} />
                            </span>
                            
                        </label>
                     </div>
                     <h3>Equipación</h3>
                     <div className='equipacion'></div>
                     <label>
                            <span>
                                Proyector
                                <input type='checkbox' name='proyector' checked={proyector} onChange={e => setProyector(e.target.checked)} />
                            </span>
                            <span>
                                Impresora
                                <input type='checkbox' name='impresora' checked={impresora} onChange={e => setImpresora(e.target.checked)} />
                            </span>
                            </label>
                           
                     

                   
                    {error &&
                        <div className='errorCreacion'>Error en la creación</div>
                    }
                    <button className='crearCoworking'>REGISTRAR COWORKING</button>
                </form>
            </div>

        </div>

    )
}

export default CreateSalaCoworking
