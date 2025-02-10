import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <Link to={`/events/${event._id}`}>View Details</Link>
    </div>
  );
};

export default EventCard;
