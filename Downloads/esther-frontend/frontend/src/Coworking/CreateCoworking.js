import { useState } from "react"
import { useSelector } from "react-redux"
import { Redirect, useHistory } from "react-router-dom"

function CreateCoworking() {
    const [nombre, setNombre] =useState('')
    const [nif_cif, setNif_cif] = useState('')
    const [telefono, setTelefono] = useState('')
    const [nombreCoworking, setNombreCoworking] =useState('')
    const [provincia, setProvincia] = useState('La Coruña, Lugo, Orense, Pontevedra')
    const [ciudad, setCiudad] = useState('')
    const [direccion, setDireccion] =useState('')
    const [web, setWeb] =useState('')
    const [telefonoCoworking, setTelefonoCoworking] = useState('')
    const [descripcion, setDescripcion] = useState('')
    
    
    

    const [error, setError] = useState()
    const login = useSelector(s => s.login)
    const history = useHistory()

    if (!login || login.usuario.rol !== "propietario") {
        return <Redirect to="/" />
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const headers = { 'Content-Type': 'application/json' }
        if (login) headers['Authorization'] = login.token
        const ret = await fetch('http://localhost:9999/coworking', {
            headers,
            body: JSON.stringify({
                nombre, nif_cif, telefono,nombreCoworking, provincia, ciudad, direccion,
                 web, telefonoCoworking,
                 descripcion: descripcion ? descripcion : [], 
                
            }),
            method: 'POST'
        })
        if (ret.ok) {
         
            history.push(`/usuario/coworking/${login.id}`)
        } else {
            console.log('Error')
            setError(true)
        }
    }

    return (
        <div className='createCoworkingContainer'>

            <div className='createForm'>
                <form onSubmit={handleSubmit}>
                <label>
                        <span>Foto del espacio coworking</span>
                        <div >
                            <div className="fotoCoworking" />
                            <input name="fotoCoworking" type="file" accept="image/*" />
                        </div>
                    </label>                   
                <h2>TUS DATOS</h2>
                <input name='nombre' type='text' placeholder='Nombre...' value={nombre} onChange={e => setNombre(e.target.value)} />
                <input name='nif_cif' type='text' placeholder='Nif_cif...' value={nif_cif} onChange={e => setNif_cif(e.target.value)} />
                <input name='telefono' type='text' placeholder='Telefono...' value={telefono} onChange={e => setTelefono(e.target.value)} />
                <h2>DATOS COWORKING</h2>
                <input name='nombreCoworking' type='text' placeholder='NombreCoworking...' value={nombreCoworking} onChange={e => setNombreCoworking(e.target.value)} />
                   <select value={provincia} onChange={e => setProvincia(e.target.value)}>
                        <option>Provincia...</option>
                        <option>La Coruña</option>
                        <option>Lugo</option>
                        <option>Orense</option>
                        <option>Pontevedra</option>
                    </select>
                    <input name='ciudad' type='text' placeholder='Ciudad...' value={ciudad} onChange={e => setCiudad(e.target.value)} />
                    <input name='direccion' type='text' placeholder='Direccion...' value={direccion} onChange={e => setDireccion(e.target.value)} />
                    <input name='Web' type='text' placeholder='Web...' value={web} onChange={e => setWeb(e.target.value)} />
                    <input name='telefonoCoworking' type='text' placeholder='TelefonoCoworking...' value={telefonoCoworking} onChange={e => setTelefonoCoworking(e.target.value)} />
                    <textarea name='descripcion' rows='3' cols='25' placeholder='Descripción' value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                    
                           
                     

                   
                    {error &&
                        <div className='errorCreacion'>Error en la creación</div>
                    }
                    <button className='crearCoworking'>Continuar</button>
                </form>
            </div>

        </div>

    )
}

export default CreateCoworking