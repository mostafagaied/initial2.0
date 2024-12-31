import React from 'react';
import './box.css';

import a from './images/a.jpg';
import d from './images/d.jpg';
import e from './images/e.png';
import f from './images/f.png';
import j from './images/j.png';

const Box = ({ onSelectTrip }) => {
  const trips = [
    { id: 1, time: "00:20", duration: "4h40", arrival: "05:00", departure: "Sousse", destination: "Gafsa", driver: "Anouar", rating: 5.0, price: 60.89, image: a, num: "56315016", des: "anii mn gabes" },
    { id: 2, time: "02:40", duration: "5h00", arrival: "07:40", departure: "Mahdia", destination: "Gabes", driver: "Madisson", rating: 5.0, price: 38.99, image: d , num: "56315016", des: "anii mn gabes" },
    { id: 3, time: "03:10", duration: "5h10", arrival: "08:20", departure: "Jandouba", destination: "Tunis", driver: "Jack", rating: 5.0, price: null, status: "Complet", image: e, num: "56315016" , des: "anii mn gabes" },
    { id: 4, time: "05:00", duration: "4h50", arrival: "09:50", departure: "Sidi Bouzid", destination: "Ain Drahem", driver: "Augustin", rating: 4.8, price: 45.29, image: f , num: "56315016", des: "anii mn gabes" },
    { id: 5, time: "05:30", duration: "4h40", arrival: "10:10", departure: "Nabeul", destination: "Mahdia", driver: "Maxime", rating: 4.7, price: 46.49, image: j, num: "56315016" , des: "anii mn gabes" },
  ];

  const handleClick = (trip) => {
    onSelectTrip(trip);
  };

  return (
    <div className="trip-list centered">
      {trips.map((trip) => (
        <div
          key={trip.id}
          className="trip-card styled-trip-card"
          onClick={() => handleClick(trip)}
        >
          <div className="trip-card-header">
            <div className="trip-time">
              <span>{trip.time}</span>
              <span className="trip-duration"> - {trip.duration} - </span>
              <span>{trip.arrival}</span>
            </div>
            <div className="trip-route">
              <span>{trip.departure}</span>
              <span className="trip-arrow">→</span>
              <span>{trip.destination}</span>
            </div>
          </div>
          <div className="trip-card-body">
            <div className="trip-driver">
              <img
                src={trip.image}
                alt={`Driver ${trip.driver}`}
                className="driver-avatar"
              />
              <div className="driver-info">
                <span className="driver-name">{trip.driver}</span>
                <span className="driver-rating">★ {trip.rating}</span>
              </div>
            </div>
            <div className="trip-price">
              {trip.price ? (
                <span className="price">{trip.price} €</span>
              ) : (
                <span className="status">{trip.status}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
