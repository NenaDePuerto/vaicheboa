import useFetch from "../useFetch"

function ListCoworking() {
    const listCoworking = useFetch('http://localhost:9999/coworking') || []

    return (
        <div className='listCoworking'>
            <ul>
                {listCoworking.map(list =>
                    <li key={list.id}>
                        <div>
                            {list.ciudad}
                        </div>
                        <div>
                            {list.tarifa}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ListCoworking