import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"


function Menu({ children }) {
    const [open, setOpen] = useState(false)

    const login = useSelector(s => s.login)
    const dispatch = useDispatch()

    const handleOpen = e => {
        e.preventDefault()
        setOpen(!open)
    }

    const history = useHistory()

    const handleLogout = () => {
        dispatch({ type: 'logout' })
        history.push('/')
    }

    return (
        <div onClick={handleOpen}>
            <button className='burgerUsuario'>{children}</button>
            {open &&
                <div className='usuarioLinks'>
                    <Link to={`/usuario/${login.id}`}>Mi perfil</Link>
                    <Link to={`/usuario/${login.id}/Coworking`}>Mis coworkings</Link>
                    <Link to={`/usuario/${login.id}/Reservas`}>Mis reservas</Link>
                    <button className='logout' onClick={handleLogout}>Logout</button>
                </div>
            }

        </div>
    )
}

export default Menu