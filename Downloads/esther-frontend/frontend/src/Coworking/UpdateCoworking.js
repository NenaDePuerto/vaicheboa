import { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import useFetch from "../useFetch"



function UpdateCoworkingWrapper() {
    const { id } = useParams()
    const data = useFetch(`http://localhost:9999/Coworking/${id}`)
    return data ? <UpdateCoworking data={data[0]} /> : false
}

function UpdateCoworking({ data }) {
    const [provincia, setProvincia] = useState('La Coruña, Lugo, Orense, Pontevedra')
    const [ciudad, setCiudad] = useState('')
    const [direccion, setDireccion] =useState('')
    const [tarifa, setTarifa] = useState('')    
    const [capacidad, setCapacidad] = useState('')
    const [limpieza, setLimpieza] = useState(false)
    const [parking, setParking] = useState(false)
    const [wifi, setWifi] = useState(false)
    const [proyector, setProyector] = useState(false)
    const [impresora, setImpresora] = useState(false)
    const [despacho, setDespacho] = useState(false)
    const [compartida, setCompartida] =useState(false)
    const [reuniones, setReuniones] =useState(false)
    const [eventos, setEventos] =useState(false)

    const [descripcion, setDescripcion] = useState('')

    const { id } = useParams()
    const login = useSelector(s => s.login)
    const id_usuario = login.id

    const history = useHistory()

    const handleSubmit = async e => {
        e.preventDefault()
         const coworkingFoto = e.target.coworkingFoto.files[0]

        const fd = new FormData()
        
        fd.append('provincia', provincia)
        fd.append('ciudad', ciudad)
        fd.append('direccion', direccion)
        fd.append('tarifa', tarifa)
        fd.append('capacidad', capacidad)
        fd.append('limpieza', limpieza)
        fd.append('parking', parking)
        fd.append('wifi', wifi)
        fd.append('proyector', proyector)
        fd.append('impresora', impresora)
        fd.append('despacho', despacho)
        fd.append('compartida', compartida)
        fd.append('reuniones', reuniones)
        fd.append('eventos',eventos)
        fd.append('descripcion', descripcion)
        fd.append('id_usuario', id_usuario)

        const ret = fetch(`http://localhost:9999/coworking/${id}`, {
            method: 'PUT',
            headers: { 'Authorization': login.token },
            body: fd
        })
        if (ret.ok) {
            history.push(`/coworking/${id}`)
        } else {
            console.log('Ha habido un error')
        }
    }

     const coworkingUrl = data.foto && (`http://localhost:9999/images/${data.foto}.jpg`)
     const coworkingStyle = login && data.foto && { backgroundFoto: 'url(' + coworkingUrl + ')' }


    const handleDelete = e => {
        e.preventDefault()
        const ret = fetch(`http://localhost:9999/coworking/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': login.token },
        })
        if (ret.ok) {
            history.push(`/coworking/${id}`)
        } else {
            console.log('Ha habido un error')
        }
        history.push(`/usuario/coworking/${login.id}/Coworking`)
    }

    const [open, setOpen] = useState(false)

    const handleEdit = e => {
        e.preventDefault()
        setOpen(!open)
    }


    return (
        <div className='updateCoworkingContainer'>
            <h1>Reservas</h1>
            <div className='updateCoworkingContent'>
                {!open &&
                    <div className='myCoworkingData' >
                        <ul>
                            <li>Mi coworking</li>
                            <li>Provincia {data.provincia}</li>
                            <li>Ciudad {data.ciudad}</li>
                            <li>Dirección {data.direccion}</li>
                            <li>Tarifa {data.tarifa}</li>
                        </ul>
                    </div>}
                <button onClick={handleEdit}>Editar</button>
                {open && <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Subir fotos</span>
                            <div >
                                <div className="coworkingFoto"  />
                                <input name="coworkingFoto" type="file" accept="image/*" />
                            </div>
                        </label>
                        <input name='provincia' type='text' placeholder='Provincia...' value={provincia} onChange={e => setProvincia(e.target.value)} />
                    <input name='ciudad' type='text' placeholder='Ciudad...' value={ciudad} onChange={e => setCiudad(e.target.value)} />
                    <input name='direccion' type='text' placeholder='Direccion...' value={direccion} onChange={e => setDireccion(e.target.value)} />
                    <input name='tarifa' type='number' placeholder='Tarifa...' value={tarifa} onChange={e => setTarifa(e.target.value)} />
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
                            <div className='sala'>
                        <label>
                            <span>
                                Despacho
                                <input type='checkbox' name='despacho' checked={despacho} onChange={e => setDespacho(e.target.checked)} />
                            </span>
                            <span>
                                Compartida
                                <input type='checkbox' name='compartida' checked={compartida} onChange={e => setCompartida(e.target.checked)} />
                            </span>
                            <span>
                                Sala de reuniones
                                <input type='checkbox' name='reuniones' checked={reuniones} onChange={e => setReuniones(e.target.checked)} />
                            </span>
                            <span>
                                Sala de eventos
                                <input type='checkbox' name='eventos' checked={eventos} onChange={e => setEventos(e.target.checked)} />
                            </span>
                        </label>
                     </div>
                     
                        <button>Guardar</button>
                    </form>
                    <button onClick={handleDelete}>Borrar</button>
                </div>}
              
            </div>
        </div>
    )
}

export default UpdateCoworkingWrapper