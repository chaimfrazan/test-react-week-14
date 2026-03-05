import { useNavigate } from 'react-router-dom'

function MovieCard({movie}) {
    const navigate = useNavigate()

    return (
        <div className='movie-card'>
            <img className='img' src={movie.Images[0]} />
            <h3> {movie.Title}</h3>
            <p>Year {movie.Year}</p>
            <p>Runtime {movie.Runtime}</p>
            <p>Genre {movie.Genre}</p>
            <p>Language {movie.Language}</p>
            <button className='select' onClick={() => navigate(`movie/${movie.imdbID}`)}>Select Seats</button>
        </div>
    )
}

export default MovieCard
