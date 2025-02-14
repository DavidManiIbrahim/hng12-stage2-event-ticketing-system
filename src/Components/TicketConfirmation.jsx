import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/TicketConfirmation.css';
import { jsPDF } from 'jspdf';
import JsBarcode from 'jsbarcode';

const TicketConfirmation = () => {
  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  const [ticketType, setTicketType] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [barcodeImage, setBarcodeImage] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');

  const navigate = useNavigate();

  const generateTicketNumber = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return `TECH${randomNumber}`;
  };

  useEffect(() => {
    const getStoredSpecialRequests = localStorage.getItem('specialRequests');
    console.log('Special Requests from localStorage:', getStoredSpecialRequests);

    if (getStoredSpecialRequests) setSpecialRequests(getStoredSpecialRequests);
  }, []);
  
  useEffect(() => {
    const storedPhotoUrl = localStorage.getItem('profilePhoto');
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedTicketType = localStorage.getItem('ticketType');
    const storedSpecialRequests = localStorage.getItem('specialRequests');
    const storedNumTickets = localStorage.getItem('numTickets');

    if (storedName) setUserName(storedName);
    if (storedEmail) setUserEmail(storedEmail);
    if (storedPhotoUrl) setUserPhoto(storedPhotoUrl);
    if (storedTicketType) setTicketType(storedTicketType);
    if (storedSpecialRequests) setSpecialRequests(storedSpecialRequests);
    if (storedNumTickets) setNumTickets(Number(storedNumTickets));

    const newTicketNumber = generateTicketNumber();
    setTicketNumber(newTicketNumber);

    const canvas = document.createElement('canvas');
    JsBarcode(canvas, newTicketNumber, {
      format: 'CODE128',
      displayValue: true,
      fontSize: 16,
      height: 40,
    });
    setBarcodeImage(canvas.toDataURL());
  }, []);

  const ticketDetails = {
    eventName: 'Techember Fest "25',
    location: '04 Rumens Road, Ikoyi, Lagos',
    date: 'March 15, 2025',
    time: '7:00 PM',
    ticketType: ticketType || 'VIP',
    ticketNumber: ticketNumber,
  };

  const handleDownloadTicket = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [80, 150],
    });

    doc.setFont('helvetica');

    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    const eventNameWidth = doc.getTextWidth(ticketDetails.eventName);
    doc.text(ticketDetails.eventName, (pageWidth - eventNameWidth) / 2, 15);

    doc.setFontSize(12);
    const locationWidth = doc.getTextWidth(ticketDetails.location);
    doc.text(ticketDetails.location, (pageWidth - locationWidth) / 2, 25);

    const dateTimeText = `${ticketDetails.date} | ${ticketDetails.time}`;
    const dateTimeWidth = doc.getTextWidth(dateTimeText);
    doc.text(dateTimeText, (pageWidth - dateTimeWidth) / 2, 32);

    if (userPhoto) {
      const imgWidth = 40;
      const imgHeight = 40;
      const imgX = (pageWidth - imgWidth) / 2;
      doc.addImage(userPhoto, 'JPEG', imgX, 40, imgWidth, imgHeight);
    }

    doc.setFontSize(12);
    doc.text(`Name: ${userName}`, 10, 90);
    doc.text(`Email: ${userEmail}`, 10, 96);

    doc.text(`Ticket Type: ${ticketDetails.ticketType}`, 10, 106);
    doc.text(`Number of Tickets: ${numTickets}`, 10, 112);

    if (specialRequests) {
      doc.text(`Special Requests: ${specialRequests}`, 10, 122);
    }

    doc.setFontSize(14);
    doc.text(`Ticket Number: ${ticketDetails.ticketNumber}`, 10, 132);

    if (barcodeImage) {
      doc.addImage(barcodeImage, 'PNG', 10, 140, 60, 20);
    }

    doc.save('ticket.pdf');
  };

  const handleBookAnotherTicket = () => {
    navigate('/');
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
            <p>
              <span>Name:</span> <br />
              {userName}
            </p>
            <p>
              <span>Email:</span> <br />
              {userEmail}
            </p>
          </div>

          <div className="type-details">
            <p>
              <span>Ticket Type:</span> <br />
              {ticketDetails.ticketType}
            </p>
            <p>
              <span>No of Tickets:</span> <br />
              {numTickets} {numTickets > 1 ? 'Tickets' : 'Ticket'}
            </p>
          </div>

          {specialRequests && (
            <div className="special-requests">
              <p><strong>Special Requests:</strong> <br />{specialRequests}</p>
              <hr />
            </div>
          )}

          <div className="barcode-section">
            {barcodeImage && (
              <img src={barcodeImage} alt="Barcode" className="barcode-image" />
            )}
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
