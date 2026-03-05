import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Details from './pages/Details'
import Seats from './pages/Seats'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/seat/:id" element={<Seats />} />
      </Routes>
    </>
  )
}

export default App
