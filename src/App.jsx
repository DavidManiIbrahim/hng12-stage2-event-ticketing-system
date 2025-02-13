import React from 'react';
import TicketSelection from './Components/TicketSelection';
import './App.css';
import { Routes, Route } from "react-router-dom"
import AttendeeDetails from './Components/AttendeeDetails';
import TicketConfirmation from './Components/TicketConfirmation';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<TicketSelection />} />
        {/* <Route path='/tickets' element={} /> */}
        {/* <Route path='/about-project' element={} /> */}
      </Routes>
      {/* <TicketSelection /> */}
      {/* <AttendeeDetails /> */}
      {/* <TicketConfirmation /> */}
    </div>
  );
}

export default App;
