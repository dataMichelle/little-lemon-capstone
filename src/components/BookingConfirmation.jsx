import React from "react";
import { formatDate, formatTime } from "../utils/timeDate";

const BookingConfirmation = ({ data, onCancel, onChange }) => (
  <section className="confirmation" aria-labelledby="confirmation-heading">
    <h2 id="confirmation-heading">Your Reservation has been confirmed!</h2>
    <p>Thank you for booking with us!</p>
    <dl>
      <dt>Date &amp; Time:</dt>
      <dd>
        <strong>
          {formatDate(data.resDate)} at {formatTime(data.resDate, data.resTime)}
        </strong>
      </dd>
      <dt>Guests:</dt>
      <dd>{data.guests}</dd>
      <dt>Occasion:</dt>
      <dd>{data.occasion}</dd>
      <dt>Name:</dt>
      <dd>{data.name}</dd>
      <dt>Phone:</dt>
      <dd>{data.phone}</dd>
      <dt>Email:</dt>
      <dd>{data.email || <span style={{ color: "#888" }}>—</span>}</dd>
      {data.comments && (
        <>
          <dt>Comments:</dt>
          <dd>{data.comments}</dd>
        </>
      )}
    </dl>
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      <button
        className="rounded-btn"
        style={{
          background: "#fff",
          color: "#c00",
          border: "1.5px solid #c00",
        }}
        onClick={() => {
          localStorage.removeItem("littleLemonReservation");
          if (onCancel) onCancel();
        }}
      >
        Cancel Reservation
      </button>
      <button
        className="rounded-btn"
        style={{
          background: "#fff",
          color: "#495e57",
          border: "1.5px solid #495e57",
        }}
        onClick={onChange}
      >
        Change Reservation
      </button>
    </div>
  </section>
);

export default BookingConfirmation;
