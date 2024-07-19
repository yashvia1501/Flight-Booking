import React, { useState } from 'react';
import { PiAirplaneInFlightFill } from "react-icons/pi"
import { FaPlaneDeparture } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { MdFlightLand } from "react-icons/md";
import { value } from './Data';

const NewBookings = () => {
  const [post, setPosts] = useState(value);
  const [originalPost, setOriginalPosts] = useState(value);
  const [arrival, setArrival] = useState('');
  const [dept, setDept] = useState('');
  const [price, setPrice] = useState('');
  const [order, setOrder] = useState('ASC'); // State to track sorting order

  // Get unique arrivals and departures
  const uniqueArrivals = [...new Set(originalPost.map(item => item.arrival))];
  const uniqueDepartures = [...new Set(originalPost.map(item => item.departure))];

  // Methods
  const handleSearch = () => {
    const updatedPost = originalPost.filter(item => 
      item.arrival.toLowerCase().includes(arrival.trim().toLowerCase()) &&
      item.departure.toLowerCase().includes(dept.trim().toLowerCase()) 
    );
    setPosts(updatedPost);
  };

  const handleStatus = (index) => {
    const updatedPost = [...post];
    if (updatedPost[index].status === 'Available Book Now') {
      updatedPost[index].status = 'confirmed';
    }
    setPosts(updatedPost);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
    const updatedPost = originalPost.filter(item => Number(item.cost) <= Number(e.target.value)); // Convert to Number
    setPosts(updatedPost);
  };

  const handleSort = () => {
    const sortedPosts = [...post].sort((a, b) => {
      if (order === 'ASC') {
        return a.cost - b.cost;
      } else {
        return b.cost - a.cost;
      }
    });
    setPosts(sortedPosts);
  };

  // Toggle sorting order and sort posts
  const toggleSortOrder = () => {
    setOrder(prevOrder => prevOrder === 'ASC' ? 'DESC' : 'ASC');
    handleSort();
  };
 

  return (
    <>
    <PiAirplaneInFlightFill style={{fontSize:'5rem', marginRight:'220px'}}/>
      <div>
        Price: <input type='number' min={3000} max={10000} value={price} onChange={(e) => handlePrice(e)}></input> 
        <button onClick={toggleSortOrder}>Price: {order === 'ASC' ? <FaLongArrowAltUp /> :<FaLongArrowAltDown />}</button>
        
        Arrival: <MdFlightTakeoff />
        <select value={arrival} onChange={(e) => setArrival(e.target.value)}> 
          <option value="">Select Arrival</option>
          {uniqueArrivals.map((arrival, index) => (
            <option key={index} value={arrival}>{arrival}</option>
          ))}
        </select>
        Departure: <MdFlightLand />
        <select value={dept} onChange={(e) => setDept(e.target.value)}>
          <option value="">Select Departure</option>
          {uniqueDepartures.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>
        Date: <input type='date' />
        <div className="slidecontainer">
          <p>Default range slider:</p>
          <input type="range" min={3000} max={10000} value={price} onChange={(e) => handlePrice(e)}></input>
        </div>
        <button onClick={handleSearch}>Search</button>
      
        <div className='flight-details'>
          {post.length > 0 ? post.map((item, index) => {
            return (
              <div key={index} style={{ display: "inline" }}>
                <div className='item-details'>
                  <div className='item-name'>
                    <FaPlaneDeparture style={{ fontSize: '20px', marginRight: '10px' }} />
                    {item.name}
                    <div className='item-rating'>{item.rating}</div>
                    <div>{item.duration} hrs</div>
                  </div>
                  <div>{item.arrival} ---- {item.departure}</div>
                  <div>{item.cost}</div>
                  <div className='item-status'>
                    <button onClick={() => handleStatus(index)} style={{ backgroundColor: (item.status === 'Available Book Now' ? 'green' : item.status === 'Unavailable' ? 'red' : 'lightblue') }}>
                      {item.status} 
                    </button>
                  </div>
                </div>
              </div>
            )
          }) : "SORRY :( NO FLIGHTS FOUND"}
        </div>
      </div>
    </>
  );
};

export default NewBookings;
