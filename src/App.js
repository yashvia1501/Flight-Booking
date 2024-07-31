
import './App.css';
import Dashboard from './components/Dashboard';
import Bookings from './components/Bookings';
import {Route, Routes} from "react-router-dom";
import Navbar from './Navbar';
import NewBookings from './components/NewBookings';
import { useState } from 'react';



function App() {
  const [bookings,setbookings]=useState([])
  return (
    <div className="App">
      <Navbar/>
      
      <Routes basename="/Flight-Booking">
        <Route path="/" element={<Dashboard bookings={bookings} setbookings={setbookings}/>}/>
        <Route path="/bookings" element={<Bookings bookings={bookings} setbookings={setbookings}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
