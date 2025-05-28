import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

test("shows toast on form submission", async () => {
  const mockDispatch = jest.fn();
  const mockTimes = ["17:00", "18:00"];

  render(
    <>
      <BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />
      <ToastContainer />
    </>
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2024-12-24" },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: "17:00" },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "2" },
  });

  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  fireEvent.click(
    screen.getByRole("button", { name: /make your reservation/i })
  );

  // ✅ Wait for all alerts and check that one contains the expected text
  const alerts = await screen.findAllByRole("alert");
  const hasReservationToast = alerts.some((alert) =>
    alert.textContent.toLowerCase().includes("reservation confirmed")
  );

  expect(hasReservationToast).toBe(true);
});
