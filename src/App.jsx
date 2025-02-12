import React from 'react';
import TicketSelection from './Components/TicketSelection';
import './App.css';
import AttendeeDetails from './Components/AttendeeDetails';
import TicketConfirmation from './Components/TicketConfirmation';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <TicketSelection />
      <AttendeeDetails />
      <TicketConfirmation />
    </div>
  );
}

export default App;
