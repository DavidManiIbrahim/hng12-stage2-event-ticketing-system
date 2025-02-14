import React from 'react';
import TicketSelection from './Components/TicketSelection';
import './App.css';
import { Routes, Route } from "react-router-dom"
import AttendeeDetails from './Components/AttendeeDetails';
import TicketConfirmation from './Components/TicketConfirmation';
import Navbar from './Components/Navbar';
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
   
   {/* <TicketConfirmation /> */}
    </div>
  );
}

export default App;
