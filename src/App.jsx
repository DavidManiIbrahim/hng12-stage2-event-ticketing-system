import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar';
import TicketSelection from './Components/TicketSelection';
import AttendeeDetails from './Components/AttendeeDetails';
import TicketConfirmation from './Components/TicketConfirmation';
import AboutProject from './Components/AboutProject';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<TicketSelection />} />
        <Route path='/about-project' element={<AboutProject />} />
        <Route path='/details' element={<AttendeeDetails />} />
        <Route path='/tickets' element={<TicketConfirmation />} />
      </Routes>
   
 
    </div>
  );
}

export default App;
