import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoPaperAirplane } from "react-icons/go";


const Navbar = () => {
  return (
    <nav>
            
            <div style={{display:"flex", alignItems:"center", backgroundColor:"white",
               width: "100%", height: "48px", gap: "20px"}}>
                <div style={{display:"flex"}}>
                <div className='app-icon'><svg style={{height:"36px",width:"72px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2l137.7 0c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48l-57.4 0c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32l576 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448c-17.7 0-32 14.3-32 32z"/></svg>
                </div>
                <div style={{fontFamily: "Pacifico, cursive",display:"flex", justifyContent:"center",alignItems:"center"}}>AIRVOY</div>
                </div>
                <div style={{flex:"1" ,display:"flex", alignItems:"center", justifyContent:"center", gap: "20px",marginLeft:"800px"}}>
                  <div ><NavLink to="/" className="nav-items">Dashboard</NavLink></div>
                <div> <NavLink to="/bookings" className="nav-items">Bookings</NavLink></div>
                </div>
            </div>
        
    </nav>
  )
}

export default Navbar