import { useState } from "react"
import { useSelector } from "react-redux"
import Rating from "./Rating"
import './Utils.css'

function Valoracion({ previousScore, id }) {
    const [score, setScore] = useState()
    const [voted, setVoted] = useState(previousScore)

    const login = useSelector(s => s.login)

    const handleScore = async e => {
        e.preventDefault()
        console.log(score)
        const res = await fetch(`http://localhost:9999/reserva/${id}`, {
            headers: {
                'Authorization': login.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ score }),
            method: 'PUT',
        })
        if (res.ok) {
            setVoted(true)
        } else {
            console.log('Ha habido un error')
        }
    }

    return (
        <div>
            {!voted && <form className='ratingsContainer' onSubmit={handleScore}>
                <span onClick={e => setScore(1)}>{score >= 1 ? <div className='fullStar' /> : <div className='emptyStar' />}</span>
                <span onClick={e => setScore(2)}>{score >= 2 ? <div className='fullStar' /> : <div className='emptyStar' />}</span>
                <span onClick={e => setScore(3)}>{score >= 3 ? <div className='fullStar' /> : <div className='emptyStar' />}</span>
                <span onClick={e => setScore(4)}>{score >= 4 ? <div className='fullStar' /> : <div className='emptyStar' />}</span>
                <span onClick={e => setScore(5)}>{score >= 5 ? <div className='fullStar' /> : <div className='emptyStar' />}</span>
                <button>Valorar</button>
            </form>}
            {voted &&
                <Rating value={previousScore} />
            }
        </div>

    )
}

export default Valoracion