import { useState, useEffect } from 'react'
import './App.css'
import {Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Rides from './components/Rides'
import RideDetail from './components/RideDetail'
import AddRideForm from './components/AddRideForm'

import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      <header></header>

      <main>
        <Routes>
          <Route>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/add-ride" element={<AddRideForm />} />
          </Route>
        </Routes>
        <NavBar />
        <Rides />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
