import React, { useState } from 'react';
import './Inputs.css'

function DateTimeInputForm () {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className="date-time-input-form">
      <div>
        <label htmlFor="date" className='date-time-label'>Date:</label><br />
        <input
          type="date"
          id="date"
          className='date-time-field'
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <br />
      <div>
        <label htmlFor="time" className='date-time-label'>Time:</label><br />
        <input
          type="time"
          id="time"
          className='date-time-field'
          value={time}
          onChange={handleTimeChange}
          required
        />
      </div>
    </div>
  );
}

export default DateTimeInputForm;