import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoPaperAirplane } from "react-icons/go";

const Navbar = () => {
  return (
    <nav>
            
            <div style={{display:"flex", alignItems:"center", backgroundColor:"white",
               width: "100%", height: "48px", gap: "20px"}}>
                <div className='app-icon'><GoPaperAirplane /></div>
                <div style={{flex:"1" ,display:"flex", alignItems:"center", justifyContent:"center", gap: "20px"}}>
                  <div ><NavLink to="/" className="nav-items">Dashboard</NavLink></div>
                <div> <NavLink to="/bookings" className="nav-items">Bookings</NavLink></div>
                </div>
            </div>
        
    </nav>
  )
}

export default Navbar
