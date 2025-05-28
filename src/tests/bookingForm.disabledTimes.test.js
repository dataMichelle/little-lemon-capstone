import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("unavailable times are disabled in dropdown", () => {
  const unavailable = ["19:00"];
  const availableTimes = ["17:00", "18:00", "19:00", "20:00"];

  render(
    <BookingForm
      availableTimes={availableTimes}
      unavailableTimes={unavailable}
      dispatch={() => {}}
    />
  );

  const option = screen.getByRole("option", { name: "19:00" });
  expect(option).toBeDisabled();
});
