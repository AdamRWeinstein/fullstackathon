import { useState, useEffect } from 'react';
import './App.css';
import {Router, Route, Routes } from 'react-router-dom'; 

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
        </Route>
      
    </Routes>
    </main>
    </div>
  );
}

export default App;
