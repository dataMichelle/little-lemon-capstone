// src/components/BookingPage.jsx
import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import BookingConfirmation from "./BookingConfirmation";
import { updateTimes } from "../utils/times";
import "../styles/reservations.css";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [unavailableTimes, setUnavailableTimes] = useState([]);
  const [bookingData, setBookingData] = useState(() => {
    const stored = localStorage.getItem("littleLemonReservation");
    return stored ? JSON.parse(stored) : null;
  });

  // Initialize times on mount
  useEffect(() => {
    const { available, unavailable } = updateTimes(new Date());
    setAvailableTimes(available);
    setUnavailableTimes(unavailable);
  }, []);

  // Handle updating times on new date selection
  const dispatch = ({ type, date }) => {
    if (type === "UPDATE_TIMES") {
      const { available, unavailable } = updateTimes(new Date(date));
      setAvailableTimes(available);
      setUnavailableTimes(unavailable);
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
    setBookingData(null);
  };

  return (
    <main className="booking-wrapper" aria-labelledby="booking-title">
      <section className="booking-header">
        <h1 id="booking-title">Book a Table at Little Lemon</h1>
        <h3>Reserve your spot with just a few details below</h3>
      </section>
      {!bookingData ? (
        <BookingForm
          availableTimes={availableTimes}
          unavailableTimes={unavailableTimes}
          dispatch={dispatch}
          onSubmitSuccess={handleFormSubmit}
        />
      ) : (
        <BookingConfirmation
          data={bookingData}
          onCancel={handleCancel}
          onChange={handleChange}
        />
      )}
    </main>
  );
};

export default BookingPage;
