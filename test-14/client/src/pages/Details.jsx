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
            <div className='movie-title'>
                <p>imdb: {movie.imdbRating}</p>
                <p>Votes: {movie.imdbVotes}</p>
                <p>Metascore: {movie.Metascore}</p>
            </div>
            <div>
                <h1>story</h1>
                <h3>{movie.Plot}</h3>
            </div>
            <div className='blocks'>
                <div className='block'>
                    <p>Movie ID</p>
                    <p>{movie.imdbID}</p>
                </div>
                <div className='block'>
                    <p>Year</p>
                    <p>{movie.Year}</p>
                </div>
            </div>
            <button className='select-seat' onClick={() => navigate(`seat/${movie.imdbID}`)}>Choose Seats</button>
        </div>
    )
}

export default Details
