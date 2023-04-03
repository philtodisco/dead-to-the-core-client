import axios from 'axios'
import { useState, useEffect } from 'react'

const TourDateTable = () => {
  const [tourDateData, setTourDateData] = useState([])

  useEffect(() => {
    axios.get('https://dttc-api.herokuapp.com/tourDates', {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
    .then(res => {
      setTourDateData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  // Return some JSX that uses tourDateData
  return (
    <div>
      {tourDateData.map(tourDate => (
        <div className='tour-date-container'>
          <p>{tourDate.date}</p>
          <p>{tourDate.city}, {tourDate.state}</p>
          <p>{tourDate.venue}</p>
          <a href={tourDate.rsvp}>RSVP</a>
          <a href={tourDate.ticket}>Tickets</a>
        </div>
      ))}
    </div>
  )
}

export default function Band() {
  // Use TourDateTable component
  return (
    <div>
      <h1>Band Tour Dates</h1>
      <TourDateTable />
    </div>
  )
}
