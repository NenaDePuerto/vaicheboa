import { Route, Switch, useHistory, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import MisReservas from "../Reserva/MisReservas"
import useFetch from "../useFetch"
import Tabs from "../Utils/Tabs"
import MyCoworkings from "../Coworking/MisCoworkings"
//import Opiniones from "./Opiniones"


function Profile() {
    const { id } = useParams()

    const usuarioData = useFetch(`http://localhost:9999/usuario/${id}`) || []
    const usuario = usuarioData[0]

    const login = useSelector(s => s.login)

    const history = useHistory()

    const handleUpdate = e => {
        e.preventDefault()
        history.push(`/usuario/update/${id}`)
    }

    return (
        <div className='profileContainer'>
            <h1>Tus datos</h1>
            <div className='profileUsuario'>
                {usuario &&
                    <div className='usuarioDataContainer'>
                        <div className='avatar' style={usuario && usuario.foto &&
                            { backgroundFoto: 'url(' + `http://localhost:9999/images/${usuario.foto}.jpg` + ')' }} />
                        <ul>
                            <li><b>{usuario.nombre}</b></li>
                            <li>Nif_cif <b>{usuario.nif_cif}</b></li>
                            <li>Teléfono <b>{usuario.telefono}</b></li>
                            <li>Bio<b>{usuario.bio}</b></li>
                        </ul>
                        <button onClick={handleUpdate}>Actualizar</button>
                    </div>}
                <div className='tabsContainer'>
                    <div>
                        <Tabs />
                    </div>
                    <Switch>
                        <Route path={`/usuario/:id/Coworking`}>
                            <div className='tabOption'>
                                <MyCoworkings />
                            </div>
                        </Route>
                        <Route path={`/usuario/${id}/Reservas`}>
                            <div className='tabOption'>
                                <MisReservas />
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Profile