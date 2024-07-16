
import './App.css';
import Dashboard from './components/Dashboard';
import Bookings from './components/Bookings';
import {Route, Routes} from "react-router-dom";
import Navbar from './Navbar';
import NewBookings from './components/NewBookings';

function App() {
  return (
    <div className="App">
      {/* <Dashboard/>
      <Bookings/> */}
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
      </Routes>
    </div>
  );
}

export default App;
