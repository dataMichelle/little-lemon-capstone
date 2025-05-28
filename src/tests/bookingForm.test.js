import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00"];
const mockUnavailableTimes = ["19:00", "20:00"];

describe("BookingForm", () => {
  test("unavailable times are disabled in time selection", async () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        unavailableTimes={mockUnavailableTimes}
        dispatch={() => {}}
        onSubmitSuccess={() => {}}
      />
    );

    // Simulate selecting a date
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: "2023-12-25" } });

    // Click Find a Table to reveal times
    const button = screen.getByRole("button", { name: /find a table/i });
    fireEvent.click(button);

    // Assert 19:00 button is disabled
    const timeButton = await screen.findByRole("button", { name: "7:00 PM" });
    expect(timeButton).toBeDisabled();
  });
});
