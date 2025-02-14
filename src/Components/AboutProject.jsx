import React from "react";
import "./Styles/AboutProject.css";

const AboutProject = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Event Ticket Booking UI - Open Source Practice Project 🚀</h1>
        
        <p className="about-description">
          This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone,
          explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow,
          allowing users to book event tickets quickly and efficiently.
        </p>

        <h2>Flow & Features</h2>
        <h3>Ticket Selection</h3>
        <ul className="about-list">
          <li>Users can browse available tickets (Free & Paid).</li>
          <li>Ticket options are displayed in a list or card view</li>
          <li>For Free Tickets Clicking "Get Free Ticket" Proceeds to attendee details</li>
          <li>For Paid Tickets Clicking "Purchase Ticket" Proceeds to attendee details</li>
        </ul>

        
        <h3>Attendee Detail Form</h3>
        <ul className="about-list">
          <li>Users can input their Name, Email, and optional Phone NUmber</li>
          <li>Profile picture upload option with preview functionality</li>
          <li>Ticket summary is visible to ensure users review their details before submission</li>
        </ul>

        <h3>Payment or Success Page</h3>
        <ul className="about-list">
          <li>If the ticket is free the user is taken directly to the Ticket Confirmation Page.</li>
          <li>If the ticket is paid, developers can integrate stripe, paystack pr Flutter to process payments payments before showing confirmation page.</li>
          <li>Upon successful booking users should receive:</li>
          <li>An option to download the ticket as PDF or save it to their device</li>
          <li>An email confirmation containing ticket details</li>
          <p>How to Build This</p>
        </ul>

        <h3>The UI can be implemented using:</h3>
        <br />

        <h2>Frontend (Next.js or React)</h2>
        <ul className="about-list">
          <li>Component Breakdown:</li>
          <li>TicketCard.tsx Display ticket details.</li>
          <li>AttendeeForm.tsx Captures User Details.</li>
          <li>PaymentModal.tsx Handles Payment Processing.</li>
          <li>SuccessScreen.tsx Shows the final ticket preview.</li>
          <li>State Management: React's Context Api,Zutand, or Redux (if needed).</li>
          <li>File Handling: Users should be able to upload images (profile picture for ticket) using Firebase storage, Cloudinary, or Local Preview with URL.createObjectURL().</li>
        </ul>

        <h2>Backend (Optional)</h2>
        <ul className="about-list">
          <li>If persistance is required, a backend can be built using:</li>
          <li>Node.js & Express or Firebase Functions.</li>
          <li>Database: MongoDB,PostgreSQL, or Firebase Firestore to store ticket records.</li>
        </ul>

        <h2>Payment Integration</h2>
        <ul className="about-list">
          <li>For paid events, developers should integrate:</li>
          <li>Stripe Checkout (for international transactions).</li>
          <li>Paystack or Flutterwave (for African users).</li>
          <h3>What You'll Learn</h3>
          <li>File handling & validation (profile picture uploads).</li>
          <li>Dynamic UI updates based on ticket purchase</li>
          <li>Persisting bookings using local state or a backend</li>
          <li>Integrating payment gateways for ticket purchases.</li>
          <li>Generating & validating QR Codes for event check-in (Advanced).</li>
          <p>Need Help? Reach Out!</p>
        </ul>

        <p className="about-enjoy">💛 Enjoy</p>

        <div className="about-buttons">
          <button className="design-button">Design File
            <a href="http://"></a>
          </button>
          <button className="github-button">Github Code
            <a href="http://"></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;