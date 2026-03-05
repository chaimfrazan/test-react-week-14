import { useEffect } from 'react'
import { getMovies } from '../api/axios'
import { useStore } from '../store/useStore'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'
import '../App.css'

function Home() {
    const { movies, setMovies, setLoading, searchQuery } = useStore()

    useEffect(() => async () => {
        const res = await getMovies()
        setMovies(res.data.data)
        setLoading(false)
    }, [])
    
    const filtered = movies?.filter(movie => movie.Title.includes(searchQuery))
    return (
        <div>
            <h1>Movie Night</h1>
            <h3>Search a movie and pick your seats</h3>
            <SearchBar />
            <div className='movies'>
                {filtered.map(m =>
                    <MovieCard key={m.imdbID} movie={m} />
                )}
            </div>
        </div>
    )
}

export default Home
