import React, { useState, useEffect } from 'react';
import './Styles/TicketConfirmation.css';
import { jsPDF } from 'jspdf';

const TicketConfirmation = () => {
  const [userPhoto, setUserPhoto] = useState(null); // The state for storing user photo
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [numTickets, setNumTickets] = useState(1);

  // Fetch the image from the API (Cloudinary or your API) and set it in the state
  useEffect(() => {
    const storedPhotoUrl = localStorage.getItem('profilePhoto');
    const storedName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('userEmail');
    
    if (storedName) setUserName(storedName);
    if (storedEmail) setUserEmail(storedEmail);
    
    // Fetching the profile photo URL from localStorage and setting it to state
    if (storedPhotoUrl) {
      // You can fetch the image from the API using the URL stored in localStorage if needed
      setUserPhoto(storedPhotoUrl);
    }

    const storedNumTickets = localStorage.getItem('numTickets');
    if (storedNumTickets) {
      setNumTickets(Number(storedNumTickets)); 
    }
  }, []);

  const ticketDetails = {
    eventName: 'Techember Fest "25',
    location: '04 menms rood, Ikoy, Lagos',
    date: 'March 15, 2025',
    time: '7:00 PM',
    ticketType: 'VIP',
    specialRequests: 'NE 7 Or the users sad story they write in thers gets the whole space, Max of three rows',
    ticketNumber: '234567 891026',
  };

  // Download PDF with ticket details
  const handleDownloadTicket = () => {
    const doc = new jsPDF();

    // Ticket Details Text
    doc.setFontSize(16);
    doc.text(ticketDetails.eventName, 20, 30);
    doc.setFontSize(12);
    doc.text(`${ticketDetails.location}`, 20, 40);
    doc.text(`${ticketDetails.date} | ${ticketDetails.time}`, 20, 50);

    // User Info
    doc.text(`Name: ${userName}`, 20, 60);
    doc.text(`Email: ${userEmail}`, 20, 70);

    // Ticket Type and Number
    doc.text(`${ticketDetails.ticketType} - ${numTickets} ${numTickets > 1 ? 'Tickets' : 'Ticket'}`, 20, 80);

    // Special Requests
    doc.text(`Special Requests: ${ticketDetails.specialRequests}`, 20, 90);

    // Ticket Number
    doc.text(`Ticket Number: ${ticketDetails.ticketNumber}`, 20, 100);

    // Save the PDF
    doc.save('ticket.pdf');
  };

  return (
    <div className="ticket-confirmation-container">
      <div className="ticket-confirmation-panel">
        <p>Step 3/3</p>
        <div className="confirmation-message">
          <h2>Your Ticket is Booked!</h2>
          <p>Check your email for a copy or you can download</p>
        </div>

        <div className="ticket-details">
          <div className="event-info">
            <div className="ticket-header">
              <h3 className="eventHead">{ticketDetails.eventName}</h3>
            </div>
            <div className="location-details">
              <p>{ticketDetails.location}</p>
              <p>{ticketDetails.date} | {ticketDetails.time}</p>
              <div className="image-container">
                {userPhoto && (
                  <img src={userPhoto} alt="User Avatar" className="user-avatar" />
                )}
              </div>
            </div>
          </div>

          <div className="user-info">
            <p>{userName}</p>
            <p>{userEmail}</p>
          </div>

          <div className="type-details">
            <p>{ticketDetails.ticketType}</p>
            <p>
              {numTickets} {numTickets > 1 ? 'Tickets' : 'Ticket'}
            </p>
          </div>

          <p>{ticketDetails.specialRequests}</p>

          <div className="ticket-number">
            <p>{ticketDetails.ticketNumber}</p>
          </div>
        </div>

        <div className="buttons">
          <button className="book-another-button">Book Another Ticket</button>
          <button className="download-ticket-button" onClick={handleDownloadTicket}>
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmation;
