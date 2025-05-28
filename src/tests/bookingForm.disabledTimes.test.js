import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00"];
const mockUnavailableTimes = ["19:00"];

describe("BookingForm", () => {
  test("unavailable times are disabled in dropdown", async () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        unavailableTimes={mockUnavailableTimes}
        dispatch={() => {}}
        onSubmitSuccess={() => {}}
      />
    );

    // Select a date and click button to reveal times
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: "2023-12-25" } });
    fireEvent.click(screen.getByRole("button", { name: /find a table/i }));

    // Assert 19:00 is rendered and disabled
    const timeButton = await screen.findByRole("button", { name: "7:00 PM" });
    expect(timeButton).toBeDisabled();
  });
});
