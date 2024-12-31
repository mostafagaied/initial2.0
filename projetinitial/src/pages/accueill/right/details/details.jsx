import React from 'react';
import './details.css';

const Detail = ({ trip }) => {
  if (!trip) {
    return (
      <div className="detail-container">
        <p>Select a trip to see the details here.</p>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <h2>Trip Details</h2>
      <img
        src={trip.image}
        alt={`Driver ${trip.driver}`}
        className="detail-avatar"
      />
      <p><strong>Driver:</strong> {trip.driver}</p>
      <p><strong>numero:</strong> {trip.num}</p>
      <p><strong>Rating:</strong> ★ {trip.rating}</p>
      <p><strong>From:</strong> {trip.departure}</p>
      <p><strong>To:</strong> {trip.destination}</p>
      <p><strong>Time:</strong> {trip.time}</p>
      <p><strong>Duration:</strong> {trip.duration}</p>
      <p><strong>Arrival:</strong> {trip.arrival}</p>
      <p><strong>description:</strong> {trip.des}</p>
        <strong>Price:</strong> {trip.price ? `${trip.price} €` : trip.status}
      
        <form className="message-form">
      <textarea
        className="message-input"
        placeholder="Type your message here..."
        
      ></textarea>
      <button className="send-button" type="submit">
        Send
      </button>
    </form> 
    </div>
    
  );
};

export default Detail;
