import { useParams } from 'react'
import SeateGrid from '../components/SeatGrid'

function Seats() {
  const { id } = useParams()


  return (
    <div>
      <h2>Select Seat</h2>
    </div>
  )
}

export default Seats
