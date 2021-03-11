const { Link } = require("react-router-dom")
const { default: useFetch } = require("../useFetch")


function UsuarioReserva() {
    const data = useFetch('http://localhost:9999/reserva') || []

    return(
        <div>
            <h1>Mis reservas</h1>
            {data&&data.map(d=>
            <Link to={`/reserva/${d.id_reserva}`}>
                <section>
                    <h3>Reservado el:{d.fecha_reserva}</h3>
                    <p>Tarifa:{d.tarifa_reserva}€</p>
                    <p>CheckIn:{d.fecha_inicio}</p>
                    <p>CheckOut:{d.fecha_fin}</p>
                </section> 
                </Link>
            )}
            
        </div>
    )
}
export default UsuarioReserva
