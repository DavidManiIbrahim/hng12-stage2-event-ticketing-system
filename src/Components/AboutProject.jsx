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
        <ul className="about-list">
          <li>✅ Ticket Selection: Browse available tickets (Free & Paid).</li>
          <li>✅ Attendee Details Form: Enter name, email & upload profile photo.</li>
          <li>✅ Payment & Confirmation: Integrated with Stripe, Paystack, or Flutterwave.</li>
        </ul>

        <h2>Tech Stack</h2>
        <ul className="about-list">
          <li>⚡ <strong>Frontend:</strong> React (Next.js), Zustand/Redux for state management.</li>
          <li>⚡ <strong>Backend (Optional):</strong> Node.js, Firebase, MongoDB/PostgreSQL.</li>
          <li>⚡ <strong>Payment:</strong> Stripe, Paystack, Flutterwave integration.</li>
        </ul>

        <h2>What You'll Learn 📚</h2>
        <ul className="about-list">
          <li>✔ File handling & validation (profile picture uploads).</li>
          <li>✔ Dynamic UI updates based on ticket selection.</li>
          <li>✔ Payment processing for event bookings.</li>
          <li>✔ Generating & validating QR Codes for event check-in.</li>
        </ul>

        <p className="about-enjoy">💛 Enjoy</p>

        <div className="about-buttons">
          <button className="design-button">Design File</button>
          <button className="github-button">Github Code</button>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;