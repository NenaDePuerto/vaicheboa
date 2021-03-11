import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Reservar from "../Reserva/Reservar"
import useFetch from "../useFetch"
import Rating from "../Utils/Rating"


function ShowCoworkingWrapper() {
    const { id } = useParams()
    const data = useFetch(`http://localhost:9999/coworking/${id}`)
    return data ? <ShowCoworking data={data} /> : false
}

function ShowCoworking({ data }) {
    const { id } = useParams()

    const login = useSelector(s => s.login)
    const coworkingUsuario = data.id_usuario


    return (
        <div >
            {data.map(v =>
                <div className='showCoworkingContainer'>
                    <h1 id='direccionShow'>{v.direccion}</h1>
                    <div className='showCoworkingContent'>
                        <div className='showCoworkingData'>
                            <div className='resultFoto' style={data[0].foto &&
                                { backgroundFoto: 'url(' + `http://localhost:9999/images/${data[0].foto}.jpg` + ')' }} />
                            <ul key={v.id}>
                                <li><b>{v.provincia}</b></li>
                                <li><b>{v.ciudad}</b></li>
                                <li><b>{v.direccion}</b></li>
                                <li><b>{v.tarifa}</b></li>

                            </ul>
                        </div>
                        <label className='showCoworkingStars'>
                            <Rating value={v.score_coworking} />
                        </label>
                        {!(login.id === coworkingUsuario) &&
                            <Reservar />
                        }
                        {(login.id === coworkingUsuario) &&
                            <Link to={`/updateCoworking/${id}`}>Editar</Link>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}



export default ShowCoworkingWrapper