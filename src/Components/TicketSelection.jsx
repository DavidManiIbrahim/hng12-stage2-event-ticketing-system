import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Styles/TicketSelection.css'; 

const TicketSelection = () => {
  const [selectedTicketType, setSelectedTicketType] = useState('free');
  const [numTickets, setNumTickets] = useState(1);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const ticketTypes = [
    { type: 'free', label: 'Free', price: 0, availability: 20 },
    { type: 'vip', label: 'VIP Access', price: 150, availability: 20 },
    { type: 'vvip', label: 'VVIP Access', price: 250, availability: 20 },
  ];

  // Load previously selected ticket type and number of tickets from localStorage
  useEffect(() => {
    const storedTicketType = localStorage.getItem('ticketType');
    const storedNumTickets = localStorage.getItem('numTickets');
    
    if (storedTicketType) {
      setSelectedTicketType(storedTicketType);
    }
    
    if (storedNumTickets) {
      setNumTickets(Number(storedNumTickets));
    }
  }, []);

  // Handle ticket type selection
  const handleTicketTypeChange = (type) => {
    setSelectedTicketType(type);
    localStorage.setItem('ticketType', type); // Save ticket type to localStorage
    setError('');
  };

  // Handle number of tickets change
  const handleNumTicketsChange = (event) => {
    const value = parseInt(event.target.value, 10) || 0;
    setNumTickets(value);
    if (value < 1) {
      setError('Please select at least one ticket.');
    } else {
      setError('');
      localStorage.setItem('numTickets', value); // Save number of tickets to localStorage
    }
  };

  // Handle next button click
  const handleNextClick = () => {
    if (numTickets < 1) {
      setError('Please select at least one ticket.');
      return;
    }
    navigate('/details'); // Navigate to the next step
  };

  return (
    <div className="ticket-selection-container">
      <div className="ticket-selection-panel">
        <p className='step'>Step 1/3</p>
        <div className="head">
          <h3 className='ticket-selection-text'>Ticket Selection</h3>
          <div className="line-one"></div>
          <div className="line-two"></div>
        </div>
        <h2 className="event-title">Techember Fest "25</h2>
        <p className="event-description">
          Join us for an unforgettable experience at <br /> [Event Name]! Secure your spot now.
        </p>
        <p className="event-details">
          [Event Location] || March 15, 2025 | 7:00 PM
        </p>

        <div className="ticket-types">
          {ticketTypes.map((ticket) => (
            <div
              key={ticket.type}
              className={`ticket-type ${selectedTicketType === ticket.type ? 'selected' : ''}`}
              onClick={() => handleTicketTypeChange(ticket.type)}
            >
              <div className="ticket-label">{ticket.label}</div>
              <div className="ticket-price">
                {ticket.price > 0 ? `$${ticket.price}` : 'Free'}
              </div>
              <div className="ticket-availability">
                {ticket.availability}/{52}
              </div>
            </div>
          ))}
        </div>

        <div className="ticket-quantity">
          <label htmlFor="numTickets">Number of Tickets</label>
          <select id="numTickets" value={numTickets} onChange={handleNumTicketsChange}>
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="buttons">
          <button className="next-button" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
