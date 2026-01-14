import React, { useState } from "react";
import "./App.css";
import BookingPage from "./BookingPage";

export default function App() {
  const [dateInput, setDateInput] = useState("");
  const [seat, setSeat] = useState("");
  const [showBooking, setShowBooking] = useState(false);

  const handleSubmit = () => {
    if (!dateInput || !seat) return;
    setShowBooking(true);
  };

  const handleBack = () => {
    setShowBooking(false);
  };

  return (
    <div className="body-container">
      {!showBooking ? (
        <div className="container">
          <div className="header">
            <h2 className="title">Book Seat for Time Slots</h2>
            <span className="three-dots">⋮</span>
          </div>

          <p className="subheading">
            Click Here <a href="#">(dummy hyperlink)</a> to view the cities/DCs where only full-day seat booking is enabled
          </p>

          <input
            type="date"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className="input"
          />

          <input
            type="text"
            placeholder="Enter Seat Number"
            value={seat}
            onChange={(e) => setSeat(e.target.value)}
            className="input"
          />

          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        </div>
      ) : (
        <BookingPage dateInput={dateInput} seat={seat} onBack={handleBack} />
      )}
    </div>
  );
}
