import React, { useState } from 'react';
import { FaPlaneDeparture } from "react-icons/fa";
import { value } from './Data';

const NewBookings = () => {
  const [post, setPosts] = useState(value);
  const [originalPost, setOriginalPosts] = useState(value);
  const [arrival, setArrival] = useState('');
  const [dept, setDept] = useState('');

  const handleSearch = () => {
    const updatedPost = originalPost.filter(item => 
      item.arrival.toLowerCase().includes(arrival.trim().toLowerCase()) &&
      item.departure.toLowerCase().includes(dept.trim().toLowerCase())
    );
    setPosts(updatedPost);
  };

  return (
    <>
      <div>
        Arrival: <input type='text' value={arrival} onChange={(e) => setArrival(e.target.value)} />
        Departure: <input value={dept} onChange={(e) => setDept(e.target.value)} />
        Date: <input type='date' />
        <div className="slidecontainer">
          <p>Default range slider:</p>
          {/* <input type="range" min={0} max={10000000} value={} onChange={updateFilterPrice}></input> */}
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
                    <div className='item-status'>
                      <button style={{ backgroundColor: (item.status === 'Available Book Now' ? 'green' : item.status === 'Unavailable' ? 'red' : 'lightblue') }}>
                        {item.status}
                      </button>
                    </div>
                  </div>
              </div>
            )
          }) : "null"}
        </div>
      </div>
    </>
  );
};

export default NewBookings;
