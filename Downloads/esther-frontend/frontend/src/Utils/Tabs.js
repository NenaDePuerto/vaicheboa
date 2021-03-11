import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


function Tabs() {
    const [active,] = useState()

    const login = useSelector(s => s.login)

    const tabList = ['Coworkings', 'Reservas']

    return (
        <div className='tabs '>
            {tabList.map(tab =>
                <NavLink to={`/usuario/${login && login.id}/${tab}`} activeClassName={active}>{tab}</NavLink>
            )}
        </div>
    )
}

export default Tabs;

