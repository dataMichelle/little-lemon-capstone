// src/tests/localStorage.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
const { getAllByText, getByText } = screen;

import BookingPage from "../components/BookingPage";

// Mock localStorage
beforeEach(() => {
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn();
  Storage.prototype.removeItem = jest.fn();
  jest.clearAllMocks();
});

test("writes booking data to localStorage on form submission", () => {
  render(<BookingPage />);

  const dateInput = screen.getByLabelText(/date/i);
  const guestsInput = screen.getByPlaceholderText(/guests/i);
  const findTableButton = screen.getByRole("button", { name: /find a table/i });

  // Fill in the date, guests, and find table
  fireEvent.change(dateInput, { target: { value: "2023-12-25" } });
  fireEvent.change(guestsInput, { target: { value: 4 } });
  fireEvent.click(findTableButton);

  // Click an available time
  const timeButtons = screen.getAllByRole("button", { name: /pm/i });
  fireEvent.click(timeButtons[0]);

  // Fill in contact info
  fireEvent.change(screen.getByPlaceholderText(/full name/i), {
    target: { value: "Jane Doe" },
  });
  fireEvent.change(screen.getByPlaceholderText(/phone/i), {
    target: { value: "1234567890" },
  });
  fireEvent.click(screen.getByRole("button", { name: /book the table/i }));

  expect(localStorage.setItem).toHaveBeenCalledWith(
    "littleLemonReservation",
    expect.stringContaining("Jane Doe")
  );
});

test("reads booking data from localStorage on page load", () => {
  const mockData = {
    resDate: "2023-12-25",
    resTime: "19:00",
    guests: 2,
    occasion: "Birthday",
    name: "John Doe",
    phone: "9876543210",
    email: "john@example.com",
    comments: "Window seat please",
  };

  // Mock before rendering
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockData));

  const { getByText } = render(<BookingPage />);

  expect(getByText(/john doe/i)).toBeInTheDocument();
  expect(
    screen.getAllByText((_, node) => node.textContent?.includes("7:00 PM"))[0]
  ).toBeInTheDocument();

  // or > 0 if more than one is okay
});
