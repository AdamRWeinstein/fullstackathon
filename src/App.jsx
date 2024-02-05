import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Rides from './components/Rides'
import RideDetail from './components/RideDetail'
import AddRideForm from './components/AddRideForm'
import Client from './services/api'
import Home from './components/Home';
import About from './components/About';

function App() {
  const [rides, setRides] = useState([])

  const getRides = async () => {
    let res = await Client.get('/rides')
    console.log(res)
    setRides(res.data)
  }
  useEffect(() => {
    getRides()
  },[])

  return (
    
    <div>
      <header>
        <NavBar />
      </header>

      <main>
      
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/add-ride" element={<AddRideForm />} />
            <Route path="/rides" element={<Rides rides={rides}/>} />
            <Route path='/rides/:id' element={<RideDetail rides={rides}/>}/>
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;


