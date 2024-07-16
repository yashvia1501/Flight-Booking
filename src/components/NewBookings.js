import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { value } from './Data';

const NewBookings = () => {
    const[post,setPosts]=useState(value)
    const[originalpost,setoriginalPosts]=useState(value)
    const[arrival,setarrival]=useState('')
    const[dept,setDept]=useState('')

    const HandleInput=()=>{

    }
    const HandleSearch=()=>{
        const updatedpost= originalpost.filter(item=> item.arrival.toLowerCase().includes(arrival) || item.departure.toLowerCase().includes(dept))
        setPosts(updatedpost)

    }
    console.log(post.length)
  return (
    <div>
      Arrival <input type='text' value={arrival} onChange={(e)=>setarrival(e.target.value)} />
      Departure <input value={dept} onChange={(e)=>setDept(e.target.value)}/>
      <button onClick={HandleSearch}>search</button>

      

    </div>
  )
}

export default NewBookings
