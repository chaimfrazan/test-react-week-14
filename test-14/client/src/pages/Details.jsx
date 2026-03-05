import { useParams, useNavigate } from 'react-router'
import { useStore } from '../store/useStore'

function Details() {
    const { id } = useParams()
    const navigate = useNavigate()
    const movies = useStore(state => state.movies)
    const movie = movies.find((m) => m.imdbID === id)
console.log(movie)
    return (
        <div>
            <img className='poster' src={movie.Poster} />
            <button className='select' onClick={() => navigate(`seat/${movie.imdbID}`)}>Choose Seats</button>
        </div>
    )
}

export default Details
