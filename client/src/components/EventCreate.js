import React, { useState } from 'react';
import axios from 'axios';

const EventCreate = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    axios.post('/api/events', { name, description, dateTime })
      .then(response => {
        alert('Event created!');
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Event Name" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Event Description" />
      <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
      <button type="submit" disabled={loading}>Create Event</button>
    </form>
  );
};

export default EventCreate;
