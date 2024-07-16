import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <div>
                <li> <NavLink to="/" >Dashboard</NavLink></li>
                <li> <NavLink to="/bookings" >Bookings</NavLink></li>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar
