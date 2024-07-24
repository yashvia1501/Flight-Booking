import React from 'react'
import NewBookings from './NewBookings'

const Bookings = ({bookings, setbookings}) => {
  return (
    <NewBookings bookings={bookings} setbookings={setbookings} />
  )
}

export default Bookings
