/* eslint-disable react/jsx-no-target-blank */
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const TourDateTable = () => {
  const [tourDateData, setTourDateData] = useState([])

  useEffect(() => {
    axios.get('https://dttc-api.herokuapp.com/tourDates', {
    })
    .then(res => {
      // Format the date field of each tour date object
      const formattedTourDates = res.data.map(tourDate => {
        const date = new Date(tourDate.date);
        const formattedDate = date.toLocaleDateString('en-US', { timeZone: 'UTC', month: '2-digit', day: '2-digit', year: 'numeric' })
        return {
          ...tourDate,
          date: formattedDate
        }
      })
      formattedTourDates.sort((a, b) => new Date(a.date) - new Date(b.date)); // sort by date
      setTourDateData(formattedTourDates)
    })
    .catch(err => {
      console.log(err)
    })
  }
  ,[])
  
  
  // const emptyLinkHandler = (event) => {
  //   const href = event.currentTarget.href
  //   const innerText = event.currentTarget.innerText
  //   console.log(innerText)
  //   if (href === window.location.href) {
  //     event.preventDefault()
  //     if (innerText === "Tickets") {
  //       alert('Tickets are unavailable for this event')
  //     } else alert('RSVP page is unavailable for this event')
  //   }
  // }

  const emptyLinkHandler = (event) => {
    const href = event.currentTarget.href
    const innerText = event.currentTarget.innerText
    console.log(innerText)
    if (href === window.location.href) {
      event.preventDefault()
    }
  }

  // Return some JSX that uses tourDateData
  return (
    <div>
      {tourDateData.map(tourDate => ( 
        <div className='tour-date-container'>
          <p id='date'>{tourDate.date}</p>
          <p>{tourDate.city}, {tourDate.state}</p>
          <p>{tourDate.venue}</p>
          <a className={`tour-links ${tourDate.rsvp === "" && 'is-empty'}`} href={tourDate.rsvp} target="_blank" onClick={emptyLinkHandler}>RSVP</a>
          <a className={`tour-links ${tourDate.ticket === "" && 'is-empty'}`} href={tourDate.ticket} target="_blank" onClick={emptyLinkHandler}>Tickets</a>
        </div>
      ))}
    </div>
  )
}

export default function Tour() {
  // Use TourDateTable component
  return (
    <React.Fragment>
    <div className='tour-date-page'>
      <h1 className='page-title'>TOUR DATES</h1>
      <TourDateTable />
    </div>
    </React.Fragment>
  )
}