import React from "react";
import { render, screen } from "@testing-library/react";
import BookingSlotList from "../components/BookingSlotList";

test("renders available and booked slots correctly", () => {
  const slots = [
    { time: "17:00", isBooked: false },
    { time: "18:00", isBooked: true },
  ];

  render(<BookingSlotList slots={slots} />);

  expect(
    screen.getByText((text) => text.includes("17:00"))
  ).toBeInTheDocument();
  expect(
    screen.getByText((text) => text.includes("18:00"))
  ).toBeInTheDocument();

  expect(screen.getByText("18:00")).toHaveClass("booked"); // or aria-disabled
});
