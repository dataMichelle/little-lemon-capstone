import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import { initializeTimes, updateTimes } from "../utils/times";
import "../styles/reservations.css";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [bookingData, setBookingData] = useState(() => {
    // Load from localStorage on mount
    const stored = localStorage.getItem("littleLemonReservation");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    setAvailableTimes(initializeTimes());
  }, []);

  const dispatch = ({ type, date }) => {
    if (type === "UPDATE_TIMES") {
      setAvailableTimes(updateTimes(date));
    }
  };

  const handleFormSubmit = (formData) => {
    setBookingData(formData);
  };

  const handleCancel = () => {
    localStorage.removeItem("littleLemonReservation");
    setBookingData(null);
  };

  const handleChange = () => {
    // Optionally keep the data to pre-fill the form, or clear it for a fresh start
    setBookingData(null);
  };

  return (
    <div className="booking-wrapper">
      <section className="booking-header">
        <h1>Book a Table at Little Lemon</h1>
        <p>Reserve your spot with just a few details below</p>
      </section>
      {!bookingData ? (
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          onSubmitSuccess={handleFormSubmit}
        />
      ) : (
        <>
          <hr />
          <BookingConfirmation
            data={bookingData}
            onCancel={handleCancel}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};

export default BookingPage;
