import { Link, useParams } from "react-router-dom"
import useFetch from "../useFetch"


function UsuarioPropietario() {
    const {id} = useParams()
    const data = useFetch('http://localhost:9999/usuario/coworking/'+`${id}`)
    
    return(
        <div className='main-listcoworkings'>
            <h1>Mis coworkings</h1>
            {data&&data.map(d=>
            <Link to={`/updateCoworking/${d.id}`}><div id='listcoworking'>
            
                <h3>{d.tarifa_coworking}</h3>
                <main>
                    <p>{d.ciudad}</p>
                    <p>sala:{d.sala}</p>
                </main>
            </div>
            </Link>
            )}
        </div>
    )
}
export default UsuarioPropietario