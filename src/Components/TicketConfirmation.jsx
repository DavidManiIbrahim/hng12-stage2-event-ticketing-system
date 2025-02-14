<<<<<<< HEAD

=======
import userImg from "../assets/User.img.png"
>>>>>>> 6b5810317270f93bcefecb7917ef5e3f7b17fcb5
import React from 'react';
import './Styles/TicketConfirmation.css';

const TicketConfirmation = () => {
  const ticketDetails = {
    eventName: 'Techember Fest "25',
    location: '04 menms rood, Ikoy, Lagos',
    date: 'March 15, 2025',
    time: '7:00 PM',
    userName: 'Avi Chukwu',
    userEmail: 'User@email.com',
    ticketType: 'VIP',
    specialRequests: 'NE 7 Or the users sad story they write in thers gets the whole space, Max of three rows',
    ticketNumber: '234567 891026',
  };

  return (
    <div className="ticket-confirmation-container">
      <div className="ticket-confirmation-panel">
          <p>Step 3/3</p>
        <div className="header">
          {/* <button className="my-tickets-button">MY TICKETS →</button> */}
        </div>
        <div className="confirmation-message">
          <h2>Your Ticket is Booked!</h2>
          <p>Check your email for a copy or you can download</p>
        </div>

        <div className="ticket-details">
           <div className="event-info">
             <div className="ticket-header">
               <div className="image-container">
                 
               </div>
               <h3 className="eventHead">{ticketDetails.eventName}</h3>
             </div>
             <div className="location-details">
               <p>{ticketDetails.location}</p>
               <p>{ticketDetails.date} | {ticketDetails.time}</p>
             </div>
                 <img src="" alt="User Avatar" className="user-avatar" />
           </div>

           <div className="user-info">
             <p>{ticketDetails.userName}</p>
             <p>{ticketDetails.userEmail}</p>
           </div>

           <div className="type-details">
             <p>{ticketDetails.ticketType}</p>
             <p>{ticketDetails.specialRequests}</p>
           </div>
           <div className="ticket-number">
             <p>{ticketDetails.ticketNumber}</p>
           </div>
           <div className="barcode">
             
             <div className="barcode-placeholder">Barcode Here</div>
           </div>
        </div>

        <div className="buttons">
          <button className="book-another-button">Book Another Ticket</button>
          <button className="download-ticket-button">Download Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmation;