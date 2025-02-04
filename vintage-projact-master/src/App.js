// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AddClient from './Components/AddClient';
import Content from './Components/Content'; // Import Content component

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column" }}>
        <Navbar />
        <h1 className='tite'>Discover Our New Clothing</h1>
        <Routes>
          <Route path="/AddClient" element={<AddClient />} />
          <Route path="/Content" element={<Content />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
