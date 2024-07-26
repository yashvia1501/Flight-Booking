
import React,{useState} from 'react'
import { value } from "./Data";
import { useLocation } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';



const Dashboard = ({bookings,setbookings}) => {  
  const [post, setPosts] = useState(value);
  const [originalPost, setOriginalPosts] = useState(value);
  const [arrival, setArrival] = useState("");
  const [dept, setDept] = useState(""); 
  const uniqueArrivals = [...new Set(originalPost.map((item) => item.arrival))];
  const uniqueDepartures=[...new Set(originalPost.map((item)=>item.departure))]
  const location=useLocation();
  const navigate=useNavigate();
  // const tempData = location.state;
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const HandleNoBooking=()=>{
    navigate('/bookings');
  }
  
  return (
    <>
      
    <div  style={{border:"2px solid rgb(209 211 217 / 38%)",height:"calc(100vh - 48px)",overflowY:"auto",paddingTop:"16px",position:"relative"}}>
    <div className='bg-dashboard'></div>
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
        <div >
         Departure:{item.departure}
        </div>
       <div>Cost:{item.cost}</div>
       <div>Duration: {item.duration}</div>
       <div>Flight Number :{item.flghtnumber}</div>
        </div>))
       }
       
       </>)
       : (
       <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>No Bookings </div>
        <button style={{
          border:"none",
          borderRadius:"3px",
          boxShadow:"2px 2px solid gray",
          padding:"10px 16px",
          cursor:"pointer",
          marginLeft:"16px",
          fontSize:"16px",
          color:"white",
          backgroundColor:"#4aa3c5b3",
          borderRadius: "13px"
          }} onClick={()=>{HandleNoBooking()}}>Book Now</button>
        </div>
       )
      }
      

    
    <div style={{display:"flex", alignItems:"center",justifyContent:"center",width:"80%",height:"46px",fontSize:"30px",margin: "21px auto"}}>Top Destinations in India</div>
     <div style={{margin: "20px auto",width: "79%",overflowX:"auto", gap:"30px",display:"flex"}}>
    <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

      <div className='image-box'>
        <div><img alt="" className="Box-sc-kv6pi1-0 hRUYUu" 
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
    data-element-name="top-destination-city-image" style={{margin: "0px auto"}}/></div>
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
 
    </Carousel>
       </div>
    </div>
    </>
    
  )
}

export default Dashboard
