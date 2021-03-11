import { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory, } from "react-router-dom"

function CreateIncidencia() {
  const [estado, setEstado] = useState('')
  const [categoria, setCategoria] = useState('')
 const [descripcion, setDescripcion] = useState('')

  const [error, setError] = useState()
  const login = useSelector(s => s.login)
  const history = useHistory()
  const handleSubmit = async e => {
    e.preventDefault()
    const headers = { 'Content-Type': 'application/json' }
    if (login) headers['Authorization'] = login.token
    const ret = await fetch('http://localhost:9999/incidencia', {
      headers,
      body: JSON.stringify({
        estado, categoria, descripcion

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
    <div className='incidenciaContainer'>
      <div className='createForm'>
        <form onSubmit={handleSubmit}>
          <h2>Reportar una incidencia</h2>
          <h3>estado</h3>
          <span>
            activado/desactivado
            <input type='checkbox' name='estado'
              checked={estado} onChange={e => setEstado(e.target.checked)} />
          </span>
          <h3>categoría</h3>
          <div className='categoria'></div>
          <label>
            <span>
              limpieza
              <input type='checkbox' name='limpieza'/>
            </span>
            <span>
              servicios
                <input type='checkbox' name='servicios' />
            </span>
            <span>
              equipación
                <input type='checkbox' name='equipacion' />
            </span>
            <span>
              otros
                <input type='checkbox' name='otros'/>
            </span>
          </label>
          <h3>descripción</h3>
          <textarea name='descripcion' rows='3' cols='25' placeholder='Descripción'
            value={descripcion} onChange={e => setDescripcion(e.target.value)} />
        {error &&
                        <div className='errorCreacion'>Error en el reporte de la incidencia</div>
                    }
                    <button className='crearSala'>Reportar una incidencia</button>
        </form>
      </div>
    </div>
  )

}

export default CreateIncidencia;