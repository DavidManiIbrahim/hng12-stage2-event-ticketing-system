import React, { useState } from 'react';
import './Styles/AttendeeDetails.css';

const AttendeeDetails = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [specialRequest, setSpecialRequest] = useState('');

  const handlePhotoUpload = (event) => {
    
    const file = event.target.files[0];
    setProfilePhoto(file); 
    console.log("Uploaded Photo:", file); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Form submitted:", { name, email, specialRequest, profilePhoto });
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Attendee Details</h2>
        <p className='step'>Step 2/3</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="upload-area">
          <label htmlFor="profilePhoto">Upload Profile Photo</label>
          <div className="upload-box">
            <input 
              type="file" 
              id="profilePhoto" 
              onChange={handlePhotoUpload} 
              style={{ display: 'none' }} 
            />
            <div className="drag-drop-text">
              <span className="upload-icon"> 
                +
              </span>
              <p>Drag & drop or click to upload</p>
            </div>
            {profilePhoto && (
                <div className="photo-preview">
                    <img src={URL.createObjectURL(profilePhoto)} alt="Profile Preview" />
                </div>
            )}
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="name">Enter your name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Enter your email *</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="specialRequest">Special request?</label>
          <textarea 
            id="specialRequest" 
            value={specialRequest} 
            onChange={(e) => setSpecialRequest(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button type="button" className="back">Back</button> {/* Add Back functionality */}
          <button type="submit" className="get-ticket">Get My Free Ticket</button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;