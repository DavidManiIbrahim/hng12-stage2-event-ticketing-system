import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook for navigation
import './Styles/TicketConfirmation.css';
import { jsPDF } from 'jspdf';

const TicketConfirmation = () => {
  const [userPhoto, setUserPhoto] = useState(null); // State for storing user photo
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  const [ticketType, setTicketType] = useState('');  // State for storing the ticket type

  // Initialize navigate hook for navigation
  const navigate = useNavigate();

  // Fetch the user details (name, email, and photo) and ticket type from localStorage
  useEffect(() => {
    const storedPhotoUrl = localStorage.getItem('profilePhoto');
    const storedName = localStorage.getItem('name'); // Make sure this key matches with the one used in AttendeeDetails
    const storedEmail = localStorage.getItem('email'); // Make sure this key matches with the one used in AttendeeDetails
    const storedTicketType = localStorage.getItem('ticketType');  // Fetch the ticket type from localStorage
    
    if (storedName) setUserName(storedName);  // Set the user name from localStorage
    if (storedEmail) setUserEmail(storedEmail); // Set the user email from localStorage
    
    // Set the profile photo URL from localStorage
    if (storedPhotoUrl) {
      setUserPhoto(storedPhotoUrl);  // Set the user photo from localStorage
    }

    const storedNumTickets = localStorage.getItem('numTickets');
    if (storedNumTickets) {
      setNumTickets(Number(storedNumTickets)); // Set the number of tickets
    }

    // Set the ticket type from localStorage
    if (storedTicketType) {
      setTicketType(storedTicketType);  // Set the ticket type from localStorage
    }

  }, []); // Empty dependency array means this will only run once when the component is mounted

  const ticketDetails = {
    eventName: 'Techember Fest "25',
    location: '04 menms rood, Ikoy, Lagos',
    date: 'March 15, 2025',
    time: '7:00 PM',
    ticketType: ticketType || 'VIP', // Use the ticket type from localStorage or fallback to 'VIP'
    specialRequests: 'NE 7 Or the users sad story they write in thers gets the whole space, Max of three rows',
    ticketNumber: '234567 891026',
  };

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

  // Handle "Book Another Ticket" navigation
  const handleBookAnotherTicket = () => {
    navigate('/'); // Navigate to the event page where the user can book another ticket
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
          <button className="book-another-button" onClick={handleBookAnotherTicket}>Book Another Ticket</button>
          <button className="download-ticket-button" onClick={handleDownloadTicket}>
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmation;
