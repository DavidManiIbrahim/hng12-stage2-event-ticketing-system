import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/AttendeeDetails.css';

const AttendeeDetails = () => {
  const navigate = useNavigate();
  
  // Load saved data from local storage
  const [profilePhoto, setProfilePhoto] = useState(localStorage.getItem('profilePhoto') || null);
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [specialRequest, setSpecialRequest] = useState(localStorage.getItem('specialRequest') || '');
  const [error, setError] = useState('');

  // Load image preview if it exists in localStorage
  useEffect(() => {
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
      setProfilePhoto(savedPhoto);
    }
  }, []);

  // Handle file upload and save to local storage
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
        localStorage.setItem('profilePhoto', reader.result); // Save as base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBoxClick = () => {
    document.getElementById('profilePhoto').click();
  };

  // Save input changes to state & localStorage
  const handleChange = (setter, key) => (event) => {
    setter(event.target.value);
    localStorage.setItem(key, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    console.log("Form submitted:", { name, email, specialRequest, profilePhoto });

    navigate('/tickets');
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Attendee Details</h2>
        <p className="step">Step 2/3</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="upload-area">
          <label>Upload Profile Photo</label>
          <div className="upload-box" onClick={handleBoxClick}>
            <input 
              type="file" 
              id="profilePhoto" 
              accept="image/*" 
              onChange={handlePhotoUpload} 
              style={{ display: 'none' }} 
            />
            {profilePhoto ? (
              <img src={profilePhoto} alt="Profile Preview" className="preview-image" />
            ) : (
              <div className="drag-drop-text">
                <span className="upload-icon">+</span>
                <p>Click to upload or drag & drop</p>
              </div>
            )}
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="name">Enter your name *</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={handleChange(setName, 'name')} 
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Enter your email *</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleChange(setEmail, 'email')} 
          />
        </div>

        <div className="input-group">
          <label htmlFor="specialRequest">Special request?</label>
          <textarea 
            id="specialRequest" 
            value={specialRequest} 
            onChange={handleChange(setSpecialRequest, 'specialRequest')}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="buttons">
          <button type="button" className="back" onClick={() => navigate('/')}>
            Back
          </button>
          <button type="submit" className="get-ticket">
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;
