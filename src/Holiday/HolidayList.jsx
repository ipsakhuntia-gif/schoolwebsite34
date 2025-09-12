// HolidayList.jsx
import React, { useState } from 'react';
import './HolidayList.css';

const HolidayList = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  
  // Holiday data for 2025 (Odia calendar) - CORRECTED
  const holidays2025 = [
    { id: 1, holiday: "Republic Day", month: "January", date: 26, day: "Sunday" },
    { id: 2, holiday: "Maha Shivaratri", month: "February", date: 26, day: "Wednesday" },
    { id: 3, holiday: "Dola Purnima", month: "March", date: 14, day: "Friday" },
    { id: 4, holiday: "Odisha Day", month: "April", date: 1, day: "Tuesday" },
    { id: 5, holiday: "Rama Navami", month: "April", date: 6, day: "Sunday" },
    { id: 6, holiday: "Good Friday", month: "April", date: 18, day: "Friday" },
    { id: 7, holiday: "Jury Purnima", month: "July", date: 10, day: "Thursday" },
    { id: 8, holiday: "Independence Day", month: "August", date: 15, day: "Friday" },
    { id: 9, holiday: "Janmashtami", month: "August", date: 28, day: "Thursday" },
    { id: 10, holiday: "Ganesh Chaturthi", month: "September", date: 5, day: "Friday" },
    { id: 11, holiday: "Dussehra", month: "October", date: 2, day: "Thursday" },
    { id: 12, holiday: "Diwali", month: "November", date: 1, day: "Saturday" },
    { id: 13, holiday: "Guru Nanak Jayanti", month: "November", date: 15, day: "Saturday" },
    { id: 14, holiday: "Christmas", month: "December", date: 25, day: "Thursday" }
  ];
  
  // Holiday data for 2026 (Odia calendar) - CORRECTED
  const holidays2026 = [
    { id: 1, holiday: "Republic Day", month: "January", date: 26, day: "Monday" },
    { id: 2, holiday: "Maha Shivaratri", month: "February", date: 15, day: "Sunday" },
    { id: 3, holiday: "Dola Purnima", month: "March", date: 3, day: "Tuesday" },
    { id: 4, holiday: "Odisha Day", month: "April", date: 1, day: "Wednesday" },
    { id: 5, holiday: "Rama Navami", month: "April", date: 26, day: "Sunday" },
    { id: 6, holiday: "Good Friday", month: "April", date: 3, day: "Friday" },
    { id: 7, holiday: "Jury Purnima", month: "July", date: 30, day: "Thursday" },
    { id: 8, holiday: "Independence Day", month: "August", date: 15, day: "Saturday" },
    { id: 9, holiday: "Janmashtami", month: "August", date: 17, day: "Monday" },
    { id: 10, holiday: "Ganesh Chaturthi", month: "September", date: 25, day: "Friday" },
    { id: 11, holiday: "Dussehra", month: "October", date: 21, day: "Wednesday" },
    { id: 12, holiday: "Diwali", month: "November", date: 19, day: "Thursday" },
    { id: 13, holiday: "Guru Nanak Jayanti", month: "November", date: 24, day: "Tuesday" },
    { id: 14, holiday: "Christmas", month: "December", date: 25, day: "Friday" }
  ];
  
  const currentHolidays = selectedYear === 2025 ? holidays2025 : holidays2026;
  
  return (
    <div className="container">
      <header>
        <h1>HOLIDAY LIST OF {selectedYear}-{selectedYear+1}</h1>
        <p>According to Odia Calendar</p>
      </header>
      
      <div className="year-selector">
        <button 
          className={`year-button ${selectedYear === 2025 ? 'active' : ''}`}
          onClick={() => setSelectedYear(2025)}
        >
          2025-2026
        </button>
        <button 
          className={`year-button ${selectedYear === 2026 ? 'active' : ''}`}
          onClick={() => setSelectedYear(2026)}
        >
          2026-2027
        </button>
      </div>
      
      <div className="table-container">
        <table className="holiday-table">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Holiday</th>
              <th>Month</th>
              <th>Date</th>
              <th>Day</th>
            </tr>
          </thead>
          <tbody>
            {currentHolidays.map(holiday => (
              <tr key={holiday.id}>
                <td>{holiday.id}</td>
                <td>{holiday.holiday}</td>
                <td>{holiday.month}</td>
                <td>{holiday.date}</td>
                <td>{holiday.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="footer-line">
        
      </div>
    </div>
  );
};

export default HolidayList;