
import React,{useState} from 'react'
import { value } from "./Data";
import { useLocation } from 'react-router-dom';



const Dashboard = ({bookings,setbookings}) => {  
  const [post, setPosts] = useState(value);
  const [originalPost, setOriginalPosts] = useState(value);
  const [arrival, setArrival] = useState("");
  const [dept, setDept] = useState(""); 
  const uniqueArrivals = [...new Set(originalPost.map((item) => item.arrival))];
  const uniqueDepartures=[...new Set(originalPost.map((item)=>item.departure))]
  const location=useLocation();
  // const tempData = location.state;

  
  
  return (
    <>
      
    <div style={{display:'grid',border:"2px solid black"}}>
      {console.log("bookings",bookings)}
      {bookings.length>0 ?
       (
       <>
       {
        bookings.map((item)=>(<div className='dash-item-detail' key={item.flghtnumber}>
        <div >Name: {item.name}</div>
        <div> 
          Arrival: {item.arrival}
        </div>
        <div>
         Departure:{item.departure}
        </div>
       <div>Cost:{item.cost}</div>
       <div>Duration: {item.duration}</div>
       <div>Flight Number :{item.flghtnumber}</div>
        </div>))
       }
       
       </>)
       : "no bookings"
      }
      

    
      <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>Top Destinations in India</div>
    <div className="wholeimg" style={{display:'flex',alignItems:"center",justifyContent:"center",margin: "64px auto",
    width: "100%",overflow:"auto", gap:"30px"}}>

      <div className='image-box'>
        <div><img alt="" class="Box-sc-kv6pi1-0 hRUYUu" 
      src="//pix6.agoda.net/geo/city/14552/1_14552_02.jpg?ca=6&amp;ce=1&amp;s=345x345&amp;ar=1x1" 
      data-element-name="top-destination-city-image" style={{margin: "0px auto"}}/> </div>
      <div className='placesName'>New Delhi and NCR</div>
      </div>

      <div className='image-box'>
      <div><img alt="" class="Box-sc-kv6pi1-0 hRUYUu" src="//pix6.agoda.net/geo/city/4923/1_4923_02.jpg?ca=8&amp;ce=1&amp;s=345x345&amp;ar=1x1" 
      data-element-name="top-destination-city-image" style={{margin: "0px auto"}}/></div>
      <div className='placesName'>Banglore</div>
     </div>

    <div  className='image-box'>
    <div><img alt="" class="Box-sc-kv6pi1-0 hRUYUu" src="//pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&amp;ce=1&amp;s=345x345&amp;ar=1x1" 
    data-element-name="top-destination-city-image" style={{margin: "0px auto"}}/></div>
    <div className='placesName'>Mumbai</div>
    </div>

    <div  className='image-box'>
    <div><img alt="" class="Box-sc-kv6pi1-0 hRUYUu" src="//pix6.agoda.net/geo/city/11304/077a5dc2a344a604731be86537916ba0.jpg?ce=0&amp;s=345x345&amp;ar=1x1" 
    data-element-name="top-destination-city-image" style={{margin: "0px auto"}}/></div>
    <div className='placesName'>Goa</div>
    </div>

     <div  className='image-box'>
    <div><img alt="" class="Box-sc-kv6pi1-0 hRUYUu" src="//pix6.agoda.net/geo/city/8801/1_8801_02.jpg?ca=6&amp;ce=1&amp;s=345x345&amp;ar=1x1" 
    data-element-name="top-destination-city-image" style={{margin: "0px auto",display:'flex'}}/></div>
    <div className='placesName'>Hyderabad</div>
    </div>

    <div  className='image-box'>
    <div><img alt="" class="Box-sc-kv6pi1-0 hRUYUu" src="//pix6.agoda.net/geo/city/16854/0abc435fa78c2ca6fb4cb5ec86af89d0.jpg?ce=0&amp;s=345x345&amp;ar=1x1" 
    data-element-name="top-destination-city-image" style={{margin: "0px auto"}}/></div>
    <div className='placesName'>Pune</div>
    </div>

    <div  className='image-box'>
    <div><img alt="" class="Box-sc-kv6pi1-0 hRUYUu" src="//pix6.agoda.net/geo/city/12565/1_12565_02.jpg?ca=6&amp;ce=1&amp;s=345x345&amp;ar=1x1" 
    data-element-name="top-destination-city-image" style={{margin: "0px auto"}}/></div>
    <div className='placesName'>Pondicherry</div>
    </div>

    <div  className='image-box'>
    <div><img alt="" class="Box-sc-kv6pi1-0 hRUYUu" src="//pix6.agoda.net/geo/city/12354/1_12354_02.jpg?ca=6&amp;ce=1&amp;s=345x345&amp;ar=1x1" 
    data-element-name="top-destination-city-image" style={{margin: "0px auto"}}/></div>
    <div className='placesName'>Nainital</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard
