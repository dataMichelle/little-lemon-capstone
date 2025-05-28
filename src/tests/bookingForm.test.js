import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm"; //

test("renders BookingForm date label", () => {
  const mockDispatch = jest.fn();
  const mockTimes = ["17:00", "18:00"];

  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);

  const label = screen.getByLabelText(/choose date/i);
  expect(label).toBeInTheDocument();
});
