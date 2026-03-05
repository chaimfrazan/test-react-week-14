import { useStore } from '../store/useStore'

function SearchBar({set}) {
    const setSearchQuery = useStore(state => state.setSearchQuery)
    return (
        <div>
            <input className='search' type="text" placeholder='Search movie by title...' onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
    )
}

export default SearchBar
