// BookingForm.jsx
import React, { useState } from "react";
import { submitAPI } from "../api/api";
import Button from "./Button";
import { formatTime } from "../utils/timeDate";
import "../styles/reservations.css";

const BookingForm = ({
  availableTimes = [],
  unavailableTimes = [],
  dispatch,
  onSubmitSuccess,
}) => {
  const [step, setStep] = useState(1);
  const [resDate, setResDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [comments, setComments] = useState("");

  const handleFindTable = (e) => {
    e.preventDefault();
    if (!resDate) {
      setErrors({ resDate: "Please select a date" });
      return;
    }
    setErrors({});
    dispatch({ type: "UPDATE_TIMES", date: resDate });
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!name) errs.name = "Full name is required";
    if (!phone) errs.phone = "Phone number is required";
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      errs.email = "Valid email is required";
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const formData = {
      resDate,
      resTime: selectedTime,
      guests,
      occasion,
      name,
      phone,
      email,
      comments,
    };

    const success = submitAPI(formData);
    if (success) {
      localStorage.setItem("littleLemonReservation", JSON.stringify(formData));
      onSubmitSuccess(formData);
    }
  };

  const inputClass = "rounded-input";
  const buttonClass = "rounded-btn";

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <fieldset className="form-fieldset" style={{ marginBottom: "2rem" }}>
        <legend className="form-legend">Table Details</legend>
        <div className="booking-top-row">
          <label htmlFor="res-date" className="visually-hidden">
            Date
          </label>
          <input
            id="res-date"
            type="date"
            className={inputClass}
            value={resDate}
            onChange={(e) => {
              setResDate(e.target.value);
              setStep(1);
              setSelectedTime("");
            }}
            required
            style={{ marginRight: "1rem" }}
          />
          <input
            type="number"
            className={inputClass}
            min="1"
            max="10"
            value={guests}
            onChange={(e) => {
              setGuests(e.target.value);
              setStep(1);
              setSelectedTime("");
            }}
            required
            placeholder="Guests"
            style={{ width: "90px", marginRight: "1rem" }}
          />
          <select
            className={inputClass}
            value={occasion}
            onChange={(e) => {
              setOccasion(e.target.value);
              setStep(1);
              setSelectedTime("");
            }}
            style={{ marginRight: "1rem" }}
          >
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </select>
          <Button
            label="Find a Table"
            type="button"
            className="rounded-btn"
            onClick={handleFindTable}
          />
        </div>
        <textarea
          className={inputClass}
          placeholder="Additional Comments (optional)"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          rows={3}
          style={{
            width: "90%",
            margin: "1rem auto 0",
            display: "block",
            resize: "vertical",
          }}
        />
        {errors.resDate && <div className="error">{errors.resDate}</div>}

        {step >= 2 && (
          <div className="booking-times-row" style={{ marginTop: "1rem" }}>
            {availableTimes.map((time) => {
              const isDisabled = unavailableTimes.includes(time);
              return (
                <button
                  type="button"
                  key={time}
                  className={`${buttonClass} 
  ${selectedTime === time ? "selected" : ""} 
  ${isDisabled ? "unavailable" : ""}`}
                  onClick={() => {
                    if (!isDisabled) {
                      setSelectedTime(time);
                      setStep(3);
                    }
                  }}
                  disabled={isDisabled}
                  title={
                    isDisabled ? "This time is fully booked" : "Click to select"
                  }
                  style={{ margin: "0.25rem" }}
                >
                  {formatTime(resDate, time)}
                </button>
              );
            })}

            {errors.selectedTime && (
              <div className="error">{errors.selectedTime}</div>
            )}
          </div>
        )}
      </fieldset>

      {step === 3 && (
        <fieldset className="form-fieldset">
          <legend className="form-legend">Contact Details</legend>
          <div className="booking-details-row">
            <input
              type="text"
              className={inputClass}
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ marginRight: "1rem" }}
            />
            <input
              type="tel"
              className={inputClass}
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{ marginRight: "1rem" }}
            />
            <input
              type="email"
              className={inputClass}
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginRight: "1rem" }}
            />
            <Button
              label="Book the Table"
              type="submit"
              className="rounded-btn"
            />
          </div>
          <div>
            {errors.name && <span className="error">{errors.name}</span>}
            {errors.phone && <span className="error">{errors.phone}</span>}
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </fieldset>
      )}
    </form>
  );
};

export default BookingForm;
