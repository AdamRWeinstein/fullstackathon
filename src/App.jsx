import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Rides from './components/Rides'
import RideDetail from './components/RideDetail'
import RideForm from './components/RideForm'

function App() {

  return (
   
      <div>
      <header></header>
      <main>
      <NavBar />
      <Rides />
      <RideForm />
      </main>
      <footer></footer>

    </div>
  
  )
}

export default App
