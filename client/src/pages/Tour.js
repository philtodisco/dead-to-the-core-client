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
      setTourDateData(formattedTourDates)
    })
    .catch(err => {
      console.log(err)
    })
  }
  ,[])

  const emptyLinkHandler = (event) => {
    const href = event.currentTarget.href;
    console.log(href); // This will log the href of the clicked ticket-link element to the console
    if (href === window.location.href) {
      event.preventDefault()
      alert('Link Not Available')
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
          <a className='tour-links' href={tourDate.rsvp} target="_blank" onClick={emptyLinkHandler}>RSVP</a>
          <a className='tour-links' href={tourDate.ticket} target="_blank" onClick={emptyLinkHandler}>{tourDate.ticket ? 'Tickets' : 'Free Show'}</a>
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