import React, { useEffect, useState } from "react";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { MdFlightLand } from "react-icons/md";
import { value } from "./Data";
import Star from "./Star";
import ReactModal from "react-modal";
import { useNavigate } from 'react-router-dom';

const NewBookings = ({bookings,setbookings}) => {
   const [post, setPosts] = useState(value);
   const [originalPost, setOriginalPosts] = useState(value);
   const [arrival, setArrival] = useState("");
   const [dept, setDept] = useState("");
   const [price, setPrice] = useState("");
   const [order, setOrder] = useState("ASC"); // State to track sorting order
   const [stop,setstop]=useState("nonstop")
   const[modal,setModal]=useState({status:false,data:null});
   const [tempData,setTempdata]= useState({})
   const navigate = useNavigate();
   
   
   useEffect(()=>{
      const datawithkeys=originalPost.map((item,index)=>{
         return {
            ...item, 
            stop: item.name === "Mercury Airlines" || item.name==="Venus Airlines" || item.name==="Earth Airlines"
            || item.name==="Mars Airlines" ? "nonstop" : "onestop" 
          };
        });
      setOriginalPosts(datawithkeys)

      
   },[])

   //use effect used to check if the temdata state is changing or not
//    useEffect(()=>{
// console.log(tempData)
//    },[tempData])

   console.log("post", post, originalPost);
   const uniqueArrivals = [...new Set(originalPost.map((item) => item.arrival))];
   const uniqueDepartures = [
      ...new Set(originalPost.map((item) => item.departure)),
   ];

   // Methods
   const handleSearch = () => {
      const updatedPost = originalPost.filter(
         (item) =>
            item.arrival.toLowerCase().includes(arrival.trim().toLowerCase()) &&
            item.departure.toLowerCase().includes(dept.trim().toLowerCase())
      );
      setPosts(updatedPost);
      setOriginalPosts(updatedPost)
   };

   const handleStatus = (index) => {
      console.log("index", index);
      const updatedPost = [...post];
      if (updatedPost[index].status === "Available Book Now") {
         updatedPost[index].status = "Click to Confirm";
         setPosts(updatedPost);
      }
      else if(updatedPost[index].status==="Click to Confirm"){
         const tempData=post.find((post,i)=>i===index)
         console.log("post-id",index,tempData)
         setModal({...modal,status:!modal.status,data:tempData})
      
      }
   };

   const handlePrice = (e) => {
      setPrice(e.target.value);
      const updatedPost = originalPost.filter(
         (item) => Number(item.cost) <= Number(e.target.value)
      ); // Convert to Number
      setPosts(updatedPost);
   };

   const handleSort = () => {
      const sortedPosts = [...post].sort((a, b) => {
         if (order === "ASC") {
            return a.cost - b.cost;
         } else {
            return b.cost - a.cost;
         }
      });
      setPosts(sortedPosts);
      setOriginalPosts(sortedPosts)
   };

   // Toggle sorting order and sort posts
   const toggleSortOrder = () => {
      setOrder((prevOrder) => (prevOrder === "ASC" ? "DESC" : "ASC"));
      handleSort();
   };
   const handleFlightSearch=(e)=>{
     const updatePost=post.filter((item)=>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
     setPosts(updatePost)
   }

   const handleNonStop = (e) => {
      const isChecked = e.target.checked;
      setstop(isChecked);
   
      if (isChecked) {
         const updatePost = originalPost.filter((item) => item.stop === "nonstop");
         setPosts(updatePost);
      } else {
         setPosts(originalPost);
      }
   };
   const handleOneStop=(e)=>{
      const isChecked = e.target.checked;
      setstop(isChecked);
   
      if (isChecked) {
         const updatePost = originalPost.filter((item) => item.stop === "onestop");
         setPosts(updatePost);
      } else {
         setPosts(originalPost);
      }
   }

   const toggleModal=()=>{
      setModal({...modal,status:!modal.status})
   }
   const handleNo=()=>{
      setModal({...modal,status:!modal.status,data:null})  
      const updatepost=post.map(item=>{
         if (item.flghtnumber === modal?.data?.flghtnumber) {
            return { ...item, status: "Available Book Now" };
         }
         return item;
      })
      setPosts(updatepost)
      setOriginalPosts(updatepost)   
   }
   const handleYes=()=>{
     
      const updatepost=post.find(post=>post.flghtnumber===modal.data.flghtnumber)
      setbookings([...bookings,updatepost]);
      navigate('/')
   }


   return (
      <>
      {
         modal?.status && (
      <div className="modal">
         <div onClick={toggleModal} className="overlay">
  <div className="modal-content" style={{ boxShadow: "5px 6px gray"}}>
               <div>
                  {
                     
                     modal?.data && (  <p>Arrival: {modal?.data?.arrival}  Departure: {modal?.data?.departure} 
                     Duration: {modal?.data?.duration} hrs Cost: Rs.{modal?.data?.cost}
                     </p> 
                  )}
               </div>
               <p>Are you sure you want to confirm your booking ?</p>
               <button className="close-btn" onClick={handleYes}style={{marginRight:"8px"}}>YES</button>
               <button className="close-btn" onClick={handleNo}>NO</button>
               </div>
         </div>
      </div> )}
         <div
            style={{
               width: "100vw",
               margin: "auto",
               paddingTop: "10px",
               paddingBottom: "10px",
               padding: "14px 20px",
               display: "flex", gap: "16px",
               flexWrap: "wrap",
               backgroundColor: "rgb(31 44 56 / 75%)",
               boxShadow: "0px 0px 3px black"
            }}
         >

            <div style={{ display: "flex", alignItems: "center", fontSize:"14px",color:"white" }}>
               Arrival:
               <MdFlightTakeoff />
            </div>
            <select className="box-padding" style={{ fontSize:"14px" }}
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}>
               
                  <option value="">Select Arrival</option>
                  {uniqueArrivals.map((arrival, index) => (
                     <option key={index} value={arrival}>
                        {arrival}
                     </option>
                  ))}
               </select>
            <div style={{ display: "flex", alignItems: "center", fontSize:"14px",color:"white" }}>
               Departure: <MdFlightLand />
            </div>
            <select value={dept} onChange={(e) => setDept(e.target.value)} className="box-padding"  style={{ fontSize:"14px" }}>
                  <option value="">Select Departure</option>
                  {uniqueDepartures.map((dept, index) => (
                     <option key={index} value={dept}>
                        {dept}
                     </option>
                  ))}
               </select>
            <div>

               <input type="date" className="box-padding" />
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center",fontSize:"14px",color:"white"  }}>
               <div>Price:</div>
               <div>

                  <input className="box-padding"
                     type="number"
                     min={3000}
                     max={10000}
                     value={price}
                     onChange={(e) => handlePrice(e)}
                  ></input>
               </div>
               <div>

                  <div>Default range slider:</div>{" "}
               </div>
               <div>
                  <input style={{accentColor:"rgb(223, 85, 5)"}}
                     type="range"
                     min={3000}
                     max={10000}
                     value={price}
                     onChange={(e) => handlePrice(e)}
                  ></input>
               </div>
               <div>
                  <button onClick={toggleSortOrder} className="box-padding">
                     Price:
                     {order === "ASC" ? <FaLongArrowAltDown /> : <FaLongArrowAltUp />}
                  </button>
               </div>
               <div>

                  <button className="box-padding" onClick={(e)=>handleSearch(e)} >Search</button>
               </div>
            </div>
         </div>

         <div className="flight-details" style={{
            padding: "0 20px",
            height: "calc(100% - 134px)",
            overflow: "auto",
            paddingTop: "20px",
            marginTop: "4px",
            display: "flex",
            gap: "40px",
      


         }}>
            <div>
            <div style={{height:"84px"}}>
               Filter by Name :
               <div><input type="text" placeholder="flight name" onChange={(e)=>handleFlightSearch(e)}/></div>
            </div>
            <div> <div style={{height:"30px"}}>Filter By Stops</div> 
               <div><input type="radio" name="stop" value={stop} onChange={(e) => handleNonStop(e)}/>Non-Stop</div>
               <div><input type="radio" name="stop" value={stop} onChange={(e)=>handleOneStop(e)}/>1-Stop</div>
            </div>
            </div>
            <div style={{ width: "80%" }}>
               {post.length > 0
                  ? post.map((item, index) => {
                     return (
                        <div
                           key={index}
                           style={{
                              display: "flex",
                              alignItems: "center",
                              // minHeight: "32px",
                              border: "1px  solid rgb(205 192 192)",
                              borderRadius: "10px",
                              marginBottom: "16px",
                              padding: "20px",
                              width: "100%"
                           }}
                           className="item-details"
                        >
                           <div
                              className="item-name"
                              style={{ display: "flex", alignItems: "center", height: "100%" }}
                           >
                              <FaPlaneDeparture
                                 style={{ fontSize: "20px", marginRight: "10px" }}
                              />
                              {item.name}

                              <div className="item-rating" style={{ padding: "0 50px" }}>

                                 <Star stars={item.rating} reviews={item.rating} />
                              </div>
                           </div>
                           <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", height: "100%" }}>
                              <div style={{ minWidth: "100px", textAlign: "center", fontWeight: "500" }}>{item.arrival}</div>
                              <div style={{ fontSize: "12px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                 ({item.duration} hrs)
                              </div>
                              <div style={{ minWidth: "100px", textAlign: "center", fontWeight: "500" }}>{item.departure}</div>
                           </div>
                           <div style={{ padding: "0 12px", color: "red", fontWeight: "500" }}>Rs. {item.cost}/- per adult</div>
                           <div style={{ textAlign: "center" }} className="item-status">
                              <button
                                 onClick={() => handleStatus(index)}
                                 style={{
                                    backgroundColor:
                                       item.status === "Available Book Now"
                                          ? "lightblue"
                                          : item.status === "Unavailable"
                                             ? "red"
                                             : "green",
                                    padding: "6px 12px",
                                    borderRadius: "40px",
                                    color: "black",
                                    cursor: "pointer",
                                    border: "1px solid darkblue",
                                    fontSize:"14px"
                                 }}
                              >
                                 {item.status}
                              </button>
                           </div>
                        </div>
                     );
                  })
                  : "SORRY :( NO FLIGHTS FOUND"}
            </div>
         </div>
      </>
   );
};

export default NewBookings;
