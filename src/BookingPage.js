import React from "react";

export default function BookingPage({ dateInput, seat }) {
  const date = new Date(dateInput);

  const bookingDate = date
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    .replace(/ /g, "-");

  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);

  const dayOfWeek = nextDay.toLocaleDateString("en-GB", { weekday: "short" });
  const dayMonth = nextDay.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });

  return (
    <div className="body-container">
      <div className="container">
        {/* Parent Heading */}
        <div className="parent-heading">
          <span className="back-arrow">←</span>
          <h2 className="title-smallest">Book Seat for Time Slots</h2>
          <span className="three-dots">⋮</span>
        </div>

        {/* Click Here chip */}
        <div className="chip-link">
          <a href="#">Click Here</a> to view the cities/DCs where only full-day seat booking is enabled
        </div>

        <h2 className="title-small">Booking Updates</h2>

        {/* Booking Card */}
        <div className="booking-card">
          <div className="booking-header">
            <span className="booking-date">{bookingDate}</span>
            <span className="booked-chip">Booked</span>
          </div>

          <div className="seat-number">{seat}</div>
          <div className="location">Noida, NOSTP, ACECAPITOL, FLOOR-10, A</div>
          <div className="time">08:00AM - 02:00PM</div>
          <div className="cancel">Cancel</div>
        </div>

        {/* Date */}
        <h3 className="section-title">Date</h3>
        <div className="next-date-rect-small">
          <div className="date-day">{dayOfWeek}</div>
          <div className="date-number">{dayMonth}</div>
        </div>

        {/* City */}
        <h3 className="section-title">City</h3>
        <div className="dropdown-wrapper">
          <select className="dropdown">
            <option value="Noida">Noida</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        {/* Development Center */}
        <h3 className="section-title">Development Center</h3>
        <div className="dropdown-wrapper">
          <select className="dropdown">
            <option value="NOIDA-STP">NOIDA-STP</option>
            <option value="GURGAON-STP">GURGAON-STP</option>
            <option value="BANGALORE-STP">BANGALORE-STP</option>
          </select>
        </div>

        {/* System Allocated Seat Button */}
        <button className="system-seat-btn" disabled>
          Get System Allocated Seat
        </button>
      </div>
    </div>
  );
}
